import { Injectable, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { Item } from "../../item.interface";

@Injectable({
    providedIn: 'root'
})
export class ItemsPresenter implements OnDestroy {

    private add: Subject<Item> = new Subject();
    add$: Observable<Item> = this.add.asObservable();
    itemsForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        active: new FormControl(null, [Validators.required])
    });

    ngOnDestroy(): void {
        this.add.complete();
    }

    public addItemSubmit(): void {
        if (!this.itemsForm.valid) {
            return
        }

        this.add.next(this.itemsForm.value)
    }
    
}
