import { DurationPipe } from './duration.pipe';

describe('MinutesToHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
});
