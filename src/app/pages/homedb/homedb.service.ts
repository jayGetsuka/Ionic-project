import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, doc, addDoc, updateDoc, deleteDoc} from'@angular/fire/firestore';
import { Observable, map } from 'rxjs';

export interface CustomerData {
    id?: string;
    fullname: string;
    postpaid: boolean;
    price: number;
    telno: string;
}

@Injectable({
    providedIn: 'root'
    })

    export class CrudService {

    private _DB : any;
    private notesRef: any;

    constructor(private firestore: Firestore) {
        this.notesRef = collection(this.firestore, 'StudentCollection');
    }

    loadAllData(): Observable<CustomerData[]> {
        return collectionData(this.notesRef, { idField: 'id'}) as Observable<CustomerData[]>;
    }

    addData(data: CustomerData) {
      return addDoc(this.notesRef, data);
    }

    updateData(Id: String, data: any): Promise<void> {
      const docRef = doc(this.firestore,'StudentCollection/'+Id);
      return updateDoc(docRef, data);
    }

    deleteData(Id: String): Promise<void> {
      const docRef = doc(this.firestore, 'StudentCollection/'+Id); // Convert CustomerData object to plain JavaScript object
      return deleteDoc(docRef);
    }

}
