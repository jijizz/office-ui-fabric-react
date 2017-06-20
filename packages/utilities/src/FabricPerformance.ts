export interface IPerfData {
  duration: number;
  timeStamp: number;
}

export interface IPerfMeasurement {
  totalDuration: number;
  count: number;
  all: IPerfData[];
}

export interface IPerfSummary {
  [key: string]: IPerfMeasurement;
}

const now: () => number = () => (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now();

export class FabricPerformance {
  public static summary: IPerfSummary = {};

  /**
   * Measures execution time of the given syncronous function. If the same logic is executed multiple times, 
   * each individual measurement will be collected as well the overall numbers.
   * @param name - The name of this measurement
   * @param func - The logic to be measured for execution time
   */
  public static measure(name: string, func: () => void) {
    const start = now();
    func();
    const end = now();
    const measurement: IPerfMeasurement = FabricPerformance.summary[name] || {
      totalDuration: 0,
      count: 0,
      all: []
    };
    const duration = end - start;
    measurement.totalDuration += duration;
    measurement.count++;
    measurement.all.push({
      duration: duration,
      timeStamp: end
    });
    FabricPerformance.summary[name] = measurement;
  }

  public static reset() {
    FabricPerformance.summary = {};
  }
}
