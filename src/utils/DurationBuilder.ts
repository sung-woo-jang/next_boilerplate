class DurationBuilder {
  private duration: number = 0;

  static builder(): DurationBuilder {
    return new DurationBuilder();
  }

  setMilliseconds(ms: number): DurationBuilder {
    this.duration += ms;
    return this;
  }

  setSeconds(s: number): DurationBuilder {
    this.duration += s * 1000;
    return this;
  }

  setMinutes(m: number): DurationBuilder {
    this.duration += m * 60 * 1000;
    return this;
  }

  setHours(h: number): DurationBuilder {
    this.duration += h * 60 * 60 * 1000;
    return this;
  }

  setDays(d: number): DurationBuilder {
    this.duration += d * 24 * 60 * 60 * 1000;
    return this;
  }

  /**
   * 밀리초(ms) 단위로 시간을 반환
   * setTimeout, setInterval 같이 밀리초 단위를 사용하는 API에서 사용
   */
  build(): number {
    return this.duration;
  }

  /**
   * 초(s) 단위로 시간을 반환
   * 캐시 만료 시간처럼 초 단위를 사용하는 API에서 사용
   */
  buildSeconds(): number {
    return this.duration / 1000;
  }
}

export default DurationBuilder;
