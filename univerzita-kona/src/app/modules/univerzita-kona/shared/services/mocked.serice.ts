import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../models/activity.model';
import { Skill } from '../models/skill.model';
import { Faculty } from '../models/faculty.model';

@Injectable()
export class MockedService {

    getHelpActivities(): Observable<Activity[]> {
        const helpActivities: Activity[] = [
            { name: 'Online vzdelávanie detí', id: 1},
            { name: 'Šitie rúšok', id: 2, description: 'Nejaký pekný text o šití rúšok'},
            { name: 'Nákup pre seniorov', id: 3},
            { name: 'Triage pacientov', id: 4},
            { name: 'Preklad odborných textov o COVID-19 z nemčiny a angličtiny', id: 5},
            { name: 'Call centrum v zdravotníctve', id: 6},
            { name: 'Pomoc medikov pri diagnostike a medicínskych centrách', id: 7},
            { name: 'Odoberanie vzoriek v teréne', id: 8},
            { name: 'Pomoc so vzorkovaním v laboratóriách/testovanie v laboratóriách', id: 9},
            { name: 'Babysitting', id: 10},
            { name: 'Filtrovanie pacientov pri vstupe do nemocnice (meranie teploty)', id: 11},
        ];
        return of(helpActivities);
    }

    getSkills(): Observable<Skill[]> {
        const skills: Skill[] = [
            { name: 'Online vzdelávanie detí', id: 1},
            { name: 'Šitie rúšok', id: 2},
            { name: 'Nákup pre seniorov ', id: 3},
            { name: 'Babysitting', id: 4},
            { name: 'Darovanie krvi', id: 5},
            { name: 'Iné', id: 6},
        ];
        return of(skills);
    }

    getFaculties(): Observable<Faculty[]> {
        const faculties: Faculty[] = [
            { value: 'Fakulta matematiky, fyziky a informatiky', id: 1, attribute_id: 1},
            { value: 'Lekárska fakulta', id: 2, attribute_id: 1},
            { value: 'Farmaceutická fakulta', id: 3, attribute_id: 1},
            { value: 'Právnická fakulta', id: 1, attribute_id: 2},
            { value: 'Filozofická fakulta', id: 2, attribute_id: 2},
        ]
        return of(faculties);
    }

}