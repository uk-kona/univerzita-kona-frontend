import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HelpActivity } from '../models/help-activity.model';
import { Skill } from '../models/skill.model';
import { UKFaculty } from '../models/uk-faculty.model';

@Injectable()
export class MockedService {

    getHelpActivities(): Observable<HelpActivity[]> {
        const helpActivities: HelpActivity[] = [
            { name: 'Online vzdelávanie detí', value: 'online-education'},
            { name: 'Šitie rúšok', value: 'masks-sewing'},
            { name: 'Nákup pre seniorov', value: 'senior-shopping'},
            { name: 'Triage pacientov', value: 'pacients-triage'},
            { name: 'Preklad odborných textov o COVID-19 z nemčiny a angličtiny', value: 'covid-researches-translation'},
            { name: 'Call centrum v zdravotníctve', value: 'healthcare-call-centre'},
            { name: 'Pomoc medikov pri diagnostike a medicínskych centrách', value: 'medics-help'},
            { name: 'Odoberanie vzoriek v teréne', value: 'testing'},
            { name: 'Pomoc so vzorkovaním v laboratóriách/testovanie v laboratóriách', value: 'lab-assistance'},
            { name: 'Babysitting', value: 'babysitting'},
            { name: 'Filtrovanie pacientov pri vstupe do nemocnice (meranie teploty)', value: 'patients-grouping'},
        ];
        return of(helpActivities);
    }

    getSkills(): Observable<Skill[]> {
        const skills: Skill[] = [
            { name: 'Online vzdelávanie detí', value: 'online-education'},
            { name: 'Šitie rúšok', value: 'masks-sewing'},
            { name: 'Nákup pre seniorov ', value: 'senior-shopping'},
            { name: 'Babysitting', value: 'babysitting'},
            { name: 'Darovanie krvi', value: 'blood-donation'},
            { name: 'Iné', value: 'other'},
        ];
        return of(skills);
    }

    getFaculties(): Observable<UKFaculty[]> {
        const faculties: UKFaculty[] = [
            { name: 'Fakulta matematiky, fyziky a informatiky', value: 'fmfi'},
            { name: 'Lekárska fakulta', value: 'fmed'},
            { name: 'Farmaceutická fakulta', value: 'fpharm'},
            { name: 'Právnická fakulta', value: 'flaw'},
            { name: 'Filozofická fakulta', value: 'fphil'},
        ]
        return of(faculties);
    }

}