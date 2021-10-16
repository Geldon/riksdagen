import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UUID } from 'angular2-uuid';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Partibeteckning } from 'src/models/partibeteckning.enum';
import {PartiService} from "../../services/parti.service";

export interface PersonfilterData {
  text: string;
  partibeteckningar: Array<Partibeteckning>;
}

@Component({
  selector: 'app-personfilter',
  templateUrl: './personfilter.component.html',
  styleUrls: ['./personfilter.component.scss'],
})
export class PersonfilterComponent implements OnInit, OnDestroy {
  @Output() filterVisiblePersonsRequested =
    new EventEmitter<PersonfilterData | null>();

  readonly uuid = UUID.UUID();
  readonly partibeteckningar: Array<Partibeteckning> = [
    Partibeteckning.Centerpartiet,
    Partibeteckning.Kristdemokraterna,
    Partibeteckning.Liberalerna,
    Partibeteckning.Miljopartiet,
    Partibeteckning.Moderaterna,
    Partibeteckning.Socialdemokraterna,
    Partibeteckning.Sverigedemokraterna,
    Partibeteckning.Vansterpartiet,
  ];
  readonly filterTextFormControlName = 'text';
  readonly partibeteckningarFormArrayName = 'partibeteckningar';
  readonly partibeteckningFormControlName = 'partibeteckning';
  readonly partibeteckningImageCssClassControlName = 'imageCssClass';
  readonly partibeteckningNameFormControlName = 'name';
  readonly partibeteckningValueFormControlName = 'value';

  personfilterFormGroup: FormGroup;

  private readonly personfilterDebouncer: Subject<string> =
    new Subject<string>();

  private personfilterDebouncerSubscription: Subscription;

  constructor(private partiService: PartiService) {
    this.personfilterFormGroup = this.getPersonfilterFormGroup();

    this.personfilterDebouncerSubscription = this.personfilterDebouncer
      .pipe(debounceTime(200))
      .subscribe((text) => {
        const personfilterData = this.getPersonfilterData(
          text,
          this.personfilterFormGroup?.get(
            this.partibeteckningarFormArrayName
          ) as FormArray
        );

        this.filterVisiblePersonsRequested.emit(personfilterData);
      });
  }

  ngOnDestroy(): void {
    if (this.personfilterDebouncerSubscription) {
      this.personfilterDebouncerSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {}

  onFilterTextChanged(event: any): void {
    this.personfilterDebouncer.next(event?.target?.value);
  }

  onFilterCheckboxChanged(): void {
    this.personfilterDebouncer.next(this.filterTextFormControl?.value);
  }

  get partibeteckningarFormArray(): FormArray {
    return this.personfilterFormGroup?.get(
      this.partibeteckningarFormArrayName
    ) as FormArray;
  }

  get filterTextFormControl(): FormControl {
    return this.personfilterFormGroup?.get(
      this.filterTextFormControlName
    ) as FormControl;
  }

  private getPersonfilterData(
    text: string,
    partibeteckningar: FormArray
  ): PersonfilterData | null {
    if (!partibeteckningar) {
      return null;
    }

    return {
      text,
      partibeteckningar: partibeteckningar.controls
        .filter(
          (formGroup) =>
            formGroup?.get(this.partibeteckningValueFormControlName)?.value
        )
        .map(
          (formGroup) =>
            formGroup?.get(this.partibeteckningFormControlName)
              ?.value as Partibeteckning
        ),
    };
  }

  private getPersonfilterFormGroup(): FormGroup {
    return new FormGroup({
      text: new FormControl(),
      partibeteckningar: new FormArray(
        this.partibeteckningar?.map((partibeteckning) =>
          this.getPartibeteckningFormgroup(partibeteckning)
        )
      ),
    });
  }

  private getPartibeteckningFormgroup(
    partibeteckning: Partibeteckning
  ): FormGroup {
    return new FormGroup({
      partibeteckning: new FormControl(partibeteckning),
      name: new FormControl(this.partiService.getPartiName(partibeteckning)),
      imageCssClass: new FormControl(
        this.getPartiLogoImageCssClass(partibeteckning)
      ),
      value: new FormControl(true),
    });
  }

  private getPartiLogoImageCssClass(partibeteckning: Partibeteckning): string {
    return `personfilter__partibeteckningar__parti__logo--${partibeteckning?.toLowerCase()}`;
  }
}
