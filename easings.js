class Ease {

  static SineIn(t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
  }

  static SineOut(t) {
    return Math.sin(t * (Math.PI / 2));
  }

  static SineInOut(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
  }

  static QuadIn(t) {
    return t * t;
  }

  static QuadOut(t) {
    return t * (2 - t);
  }

  static QuadInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  static CubicIn(t) {
    return t * t * t;
  }

  static CubicOut(t) {
    const t1 = t - 1;
    return t1 * t1 * t1 + 1;
  }

  static CubicInOut(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  static QuartIn(t) {
    return t * t * t * t;
  }

  static QuartOut(t) {
    const t1 = t - 1;
    return 1 - t1 * t1 * t1 * t1;
  }

  static QuartInOut(t) {
    const t1 = t - 1;
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
  }

  static QuintIn(t) {
    return t * t * t * t * t;
  }

  static QuintOut(t) {
    const t1 = t - 1;
    return 1 + t1 * t1 * t1 * t1 * t1;
  }

  static QuintInOut(t) {
    const t1 = t - 1;
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
  }

  static ExpoIn(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  }

  static ExpoOut(t) {
    return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
  }

  static ExpoInOut(t) {
    if (t === 0 || t === 1) return t;
    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 1;
    return scaledTime < 1
      ? 0.5 * Math.pow(2, 10 * scaledTime1)
      : 0.5 * (-Math.pow(2, -10 * scaledTime1) + 2);
  }

  static CircIn(t) {
    const scaledTime = t / 1;
    return -1 * (Math.sqrt(1 - scaledTime * t) - 1);
  }

  static CircOut(t) {
    const t1 = t - 1;
    return Math.sqrt(1 - t1 * t1);
  }

  static CircInOut(t) {
    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 2;
    return scaledTime < 1
      ? -0.5 * (Math.sqrt(1 - scaledTime * scaledTime) - 1)
      : 0.5 * (Math.sqrt(1 - scaledTime1 * scaledTime1) + 1);
  }


}
