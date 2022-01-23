export class CounterService {
  activeToInactiveCount: number  = 0;
  inactiveToActiveCount: number  = 0;

  updateCounter(type: string) {
    if(type === 'active') {
      this.activeToInactiveCount++;
      console.log('Inactive to Active '+ this.activeToInactiveCount);
    }

    if(type === 'inactive') {
      this.inactiveToActiveCount++;
      console.log('Active to Inactive '+ this.inactiveToActiveCount);
    }
  }
}
