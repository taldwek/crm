import { observable, computed, action } from  'mobx'
import {Reservation} from './ReservationStore'


export class RestaurantStore {
    @observable reservations = []
    @observable numTables = 10
    @computed get totalReservations() { //automatically calculates the total reservations
        return this.reservations.length
    }
    // @computed get openTables() { //automatically caluclates the number of tables available, only when the state is affected
    //     let counter = 0
    //     this.reservations.forEach(r => r.seated ? counter ++: null)
    //     return (this.numTables - counter)
    // }
    // @computed get restPopulation() {
    //     // calculate the number of people in the restaurant now
    //     // (e.g. total number of people who are seated, but their reservation is not complete)
    //     let counter = 0
    //     this.reservations.forEach(r => {
    //         if (!r.completed && r.seated) {
    //             counter += r.numPeople
    //         }})
    //         return counter
    // }
    // @computed get completedTables() {
    //     //calculate the number of tables that have been completed
    //     let counter = 0
    //     this.reservations.forEach(r => counter += r.completed)
    //     return counter
    // }
    // @action addRes = (name, numPeople) => {
    // }

}