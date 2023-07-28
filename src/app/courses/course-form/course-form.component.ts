import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private _snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => {
        this.showSnackBar('Curso salvo com sucesso!');
        this.location.back();
      },
      (error) => this.showSnackBar('Ocorreu um erro!')
    );
  }

  onCancel() {
    this.location.back();
  }

  private showSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 });
  }

  ngOnInit(): void {}
}
