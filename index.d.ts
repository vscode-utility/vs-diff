declare module 'vs-diff/src/index' {
  export * from "vs-diff/src/vs/base/common/diff/diff";
  export * from "vs-diff/src/vs/base/common/diff/diffChange";
  export * from "vs-diff/src/vs/editor/common/core/lineRange";
  export * from "vs-diff/src/vs/editor/common/core/offsetRange";
  export * from "vs-diff/src/vs/editor/common/core/position";
  export * from "vs-diff/src/vs/editor/common/core/range";
  export * from "vs-diff/src/vs/editor/common/diff/linesDiffComputer";
  export * from "vs-diff/src/vs/editor/common/diff/linesDiffComputers";
  export * from "vs-diff/src/vs/editor/common/diff/smartLinesDiffComputer";
  export * from "vs-diff/src/vs/editor/common/diff/standardLinesDiffComputer";

}
declare module 'vs-diff/src/vs/base/common/assert' {
  /**
   * Throws an error with the provided message if the provided value does not evaluate to a true Javascript value.
   *
   * @deprecated Use `assert(...)` instead.
   * This method is usually used like this:
   * ```ts
   * import * as assert from 'vs/base/common/assert';
   * assert.ok(...);
   * ```
   *
   * However, `assert` in that example is a user chosen name.
   * There is no tooling for generating such an import statement.
   * Thus, the `assert(...)` function should be used instead.
   */
  export function ok(value?: unknown, message?: string): void;
  export function assertNever(value: never, message?: string): never;
  export function assert(condition: boolean): void;
  /**
   * condition must be side-effect free!
   */
  export function assertFn(condition: () => boolean): void;
  export function checkAdjacentItems<T>(items: readonly T[], predicate: (item1: T, item2: T) => boolean): boolean;

}
declare module 'vs-diff/src/vs/base/common/cache' {
  /**
   * Uses a LRU cache to make a given parametrized function cached.
   * Caches just the last value.
   * The key must be JSON serializable.
   */
  export class LRUCachedFunction<TArg, TComputed> {
      private readonly fn;
      private lastCache;
      private lastArgKey;
      constructor(fn: (arg: TArg) => TComputed);
      get(arg: TArg): TComputed;
  }

}
declare module 'vs-diff/src/vs/base/common/charCode' {
  /**
   * An inlined enum containing useful character codes (to be used with String.charCodeAt).
   * Please leave the const keyword such that it gets inlined when compiled to JavaScript!
   */
  export const enum CharCode {
      Null = 0,
      /**
       * The `\b` character.
       */
      Backspace = 8,
      /**
       * The `\t` character.
       */
      Tab = 9,
      /**
       * The `\n` character.
       */
      LineFeed = 10,
      /**
       * The `\r` character.
       */
      CarriageReturn = 13,
      Space = 32,
      /**
       * The `!` character.
       */
      ExclamationMark = 33,
      /**
       * The `"` character.
       */
      DoubleQuote = 34,
      /**
       * The `#` character.
       */
      Hash = 35,
      /**
       * The `$` character.
       */
      DollarSign = 36,
      /**
       * The `%` character.
       */
      PercentSign = 37,
      /**
       * The `&` character.
       */
      Ampersand = 38,
      /**
       * The `'` character.
       */
      SingleQuote = 39,
      /**
       * The `(` character.
       */
      OpenParen = 40,
      /**
       * The `)` character.
       */
      CloseParen = 41,
      /**
       * The `*` character.
       */
      Asterisk = 42,
      /**
       * The `+` character.
       */
      Plus = 43,
      /**
       * The `,` character.
       */
      Comma = 44,
      /**
       * The `-` character.
       */
      Dash = 45,
      /**
       * The `.` character.
       */
      Period = 46,
      /**
       * The `/` character.
       */
      Slash = 47,
      Digit0 = 48,
      Digit1 = 49,
      Digit2 = 50,
      Digit3 = 51,
      Digit4 = 52,
      Digit5 = 53,
      Digit6 = 54,
      Digit7 = 55,
      Digit8 = 56,
      Digit9 = 57,
      /**
       * The `:` character.
       */
      Colon = 58,
      /**
       * The `;` character.
       */
      Semicolon = 59,
      /**
       * The `<` character.
       */
      LessThan = 60,
      /**
       * The `=` character.
       */
      Equals = 61,
      /**
       * The `>` character.
       */
      GreaterThan = 62,
      /**
       * The `?` character.
       */
      QuestionMark = 63,
      /**
       * The `@` character.
       */
      AtSign = 64,
      A = 65,
      B = 66,
      C = 67,
      D = 68,
      E = 69,
      F = 70,
      G = 71,
      H = 72,
      I = 73,
      J = 74,
      K = 75,
      L = 76,
      M = 77,
      N = 78,
      O = 79,
      P = 80,
      Q = 81,
      R = 82,
      S = 83,
      T = 84,
      U = 85,
      V = 86,
      W = 87,
      X = 88,
      Y = 89,
      Z = 90,
      /**
       * The `[` character.
       */
      OpenSquareBracket = 91,
      /**
       * The `\` character.
       */
      Backslash = 92,
      /**
       * The `]` character.
       */
      CloseSquareBracket = 93,
      /**
       * The `^` character.
       */
      Caret = 94,
      /**
       * The `_` character.
       */
      Underline = 95,
      /**
       * The ``(`)`` character.
       */
      BackTick = 96,
      a = 97,
      b = 98,
      c = 99,
      d = 100,
      e = 101,
      f = 102,
      g = 103,
      h = 104,
      i = 105,
      j = 106,
      k = 107,
      l = 108,
      m = 109,
      n = 110,
      o = 111,
      p = 112,
      q = 113,
      r = 114,
      s = 115,
      t = 116,
      u = 117,
      v = 118,
      w = 119,
      x = 120,
      y = 121,
      z = 122,
      /**
       * The `{` character.
       */
      OpenCurlyBrace = 123,
      /**
       * The `|` character.
       */
      Pipe = 124,
      /**
       * The `}` character.
       */
      CloseCurlyBrace = 125,
      /**
       * The `~` character.
       */
      Tilde = 126,
      /**
       * The &nbsp; (no-break space) character.
       * Unicode Character 'NO-BREAK SPACE' (U+00A0)
       */
      NoBreakSpace = 160,
      U_Combining_Grave_Accent = 768,
      U_Combining_Acute_Accent = 769,
      U_Combining_Circumflex_Accent = 770,
      U_Combining_Tilde = 771,
      U_Combining_Macron = 772,
      U_Combining_Overline = 773,
      U_Combining_Breve = 774,
      U_Combining_Dot_Above = 775,
      U_Combining_Diaeresis = 776,
      U_Combining_Hook_Above = 777,
      U_Combining_Ring_Above = 778,
      U_Combining_Double_Acute_Accent = 779,
      U_Combining_Caron = 780,
      U_Combining_Vertical_Line_Above = 781,
      U_Combining_Double_Vertical_Line_Above = 782,
      U_Combining_Double_Grave_Accent = 783,
      U_Combining_Candrabindu = 784,
      U_Combining_Inverted_Breve = 785,
      U_Combining_Turned_Comma_Above = 786,
      U_Combining_Comma_Above = 787,
      U_Combining_Reversed_Comma_Above = 788,
      U_Combining_Comma_Above_Right = 789,
      U_Combining_Grave_Accent_Below = 790,
      U_Combining_Acute_Accent_Below = 791,
      U_Combining_Left_Tack_Below = 792,
      U_Combining_Right_Tack_Below = 793,
      U_Combining_Left_Angle_Above = 794,
      U_Combining_Horn = 795,
      U_Combining_Left_Half_Ring_Below = 796,
      U_Combining_Up_Tack_Below = 797,
      U_Combining_Down_Tack_Below = 798,
      U_Combining_Plus_Sign_Below = 799,
      U_Combining_Minus_Sign_Below = 800,
      U_Combining_Palatalized_Hook_Below = 801,
      U_Combining_Retroflex_Hook_Below = 802,
      U_Combining_Dot_Below = 803,
      U_Combining_Diaeresis_Below = 804,
      U_Combining_Ring_Below = 805,
      U_Combining_Comma_Below = 806,
      U_Combining_Cedilla = 807,
      U_Combining_Ogonek = 808,
      U_Combining_Vertical_Line_Below = 809,
      U_Combining_Bridge_Below = 810,
      U_Combining_Inverted_Double_Arch_Below = 811,
      U_Combining_Caron_Below = 812,
      U_Combining_Circumflex_Accent_Below = 813,
      U_Combining_Breve_Below = 814,
      U_Combining_Inverted_Breve_Below = 815,
      U_Combining_Tilde_Below = 816,
      U_Combining_Macron_Below = 817,
      U_Combining_Low_Line = 818,
      U_Combining_Double_Low_Line = 819,
      U_Combining_Tilde_Overlay = 820,
      U_Combining_Short_Stroke_Overlay = 821,
      U_Combining_Long_Stroke_Overlay = 822,
      U_Combining_Short_Solidus_Overlay = 823,
      U_Combining_Long_Solidus_Overlay = 824,
      U_Combining_Right_Half_Ring_Below = 825,
      U_Combining_Inverted_Bridge_Below = 826,
      U_Combining_Square_Below = 827,
      U_Combining_Seagull_Below = 828,
      U_Combining_X_Above = 829,
      U_Combining_Vertical_Tilde = 830,
      U_Combining_Double_Overline = 831,
      U_Combining_Grave_Tone_Mark = 832,
      U_Combining_Acute_Tone_Mark = 833,
      U_Combining_Greek_Perispomeni = 834,
      U_Combining_Greek_Koronis = 835,
      U_Combining_Greek_Dialytika_Tonos = 836,
      U_Combining_Greek_Ypogegrammeni = 837,
      U_Combining_Bridge_Above = 838,
      U_Combining_Equals_Sign_Below = 839,
      U_Combining_Double_Vertical_Line_Below = 840,
      U_Combining_Left_Angle_Below = 841,
      U_Combining_Not_Tilde_Above = 842,
      U_Combining_Homothetic_Above = 843,
      U_Combining_Almost_Equal_To_Above = 844,
      U_Combining_Left_Right_Arrow_Below = 845,
      U_Combining_Upwards_Arrow_Below = 846,
      U_Combining_Grapheme_Joiner = 847,
      U_Combining_Right_Arrowhead_Above = 848,
      U_Combining_Left_Half_Ring_Above = 849,
      U_Combining_Fermata = 850,
      U_Combining_X_Below = 851,
      U_Combining_Left_Arrowhead_Below = 852,
      U_Combining_Right_Arrowhead_Below = 853,
      U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854,
      U_Combining_Right_Half_Ring_Above = 855,
      U_Combining_Dot_Above_Right = 856,
      U_Combining_Asterisk_Below = 857,
      U_Combining_Double_Ring_Below = 858,
      U_Combining_Zigzag_Above = 859,
      U_Combining_Double_Breve_Below = 860,
      U_Combining_Double_Breve = 861,
      U_Combining_Double_Macron = 862,
      U_Combining_Double_Macron_Below = 863,
      U_Combining_Double_Tilde = 864,
      U_Combining_Double_Inverted_Breve = 865,
      U_Combining_Double_Rightwards_Arrow_Below = 866,
      U_Combining_Latin_Small_Letter_A = 867,
      U_Combining_Latin_Small_Letter_E = 868,
      U_Combining_Latin_Small_Letter_I = 869,
      U_Combining_Latin_Small_Letter_O = 870,
      U_Combining_Latin_Small_Letter_U = 871,
      U_Combining_Latin_Small_Letter_C = 872,
      U_Combining_Latin_Small_Letter_D = 873,
      U_Combining_Latin_Small_Letter_H = 874,
      U_Combining_Latin_Small_Letter_M = 875,
      U_Combining_Latin_Small_Letter_R = 876,
      U_Combining_Latin_Small_Letter_T = 877,
      U_Combining_Latin_Small_Letter_V = 878,
      U_Combining_Latin_Small_Letter_X = 879,
      /**
       * Unicode Character 'LINE SEPARATOR' (U+2028)
       * http://www.fileformat.info/info/unicode/char/2028/index.htm
       */
      LINE_SEPARATOR = 8232,
      /**
       * Unicode Character 'PARAGRAPH SEPARATOR' (U+2029)
       * http://www.fileformat.info/info/unicode/char/2029/index.htm
       */
      PARAGRAPH_SEPARATOR = 8233,
      /**
       * Unicode Character 'NEXT LINE' (U+0085)
       * http://www.fileformat.info/info/unicode/char/0085/index.htm
       */
      NEXT_LINE = 133,
      U_CIRCUMFLEX = 94,
      U_GRAVE_ACCENT = 96,
      U_DIAERESIS = 168,
      U_MACRON = 175,
      U_ACUTE_ACCENT = 180,
      U_CEDILLA = 184,
      U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706,
      U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707,
      U_MODIFIER_LETTER_UP_ARROWHEAD = 708,
      U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709,
      U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722,
      U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723,
      U_MODIFIER_LETTER_UP_TACK = 724,
      U_MODIFIER_LETTER_DOWN_TACK = 725,
      U_MODIFIER_LETTER_PLUS_SIGN = 726,
      U_MODIFIER_LETTER_MINUS_SIGN = 727,
      U_BREVE = 728,
      U_DOT_ABOVE = 729,
      U_RING_ABOVE = 730,
      U_OGONEK = 731,
      U_SMALL_TILDE = 732,
      U_DOUBLE_ACUTE_ACCENT = 733,
      U_MODIFIER_LETTER_RHOTIC_HOOK = 734,
      U_MODIFIER_LETTER_CROSS_ACCENT = 735,
      U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741,
      U_MODIFIER_LETTER_HIGH_TONE_BAR = 742,
      U_MODIFIER_LETTER_MID_TONE_BAR = 743,
      U_MODIFIER_LETTER_LOW_TONE_BAR = 744,
      U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745,
      U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746,
      U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747,
      U_MODIFIER_LETTER_UNASPIRATED = 749,
      U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751,
      U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752,
      U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753,
      U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754,
      U_MODIFIER_LETTER_LOW_RING = 755,
      U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756,
      U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757,
      U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758,
      U_MODIFIER_LETTER_LOW_TILDE = 759,
      U_MODIFIER_LETTER_RAISED_COLON = 760,
      U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761,
      U_MODIFIER_LETTER_END_HIGH_TONE = 762,
      U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763,
      U_MODIFIER_LETTER_END_LOW_TONE = 764,
      U_MODIFIER_LETTER_SHELF = 765,
      U_MODIFIER_LETTER_OPEN_SHELF = 766,
      U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767,
      U_GREEK_LOWER_NUMERAL_SIGN = 885,
      U_GREEK_TONOS = 900,
      U_GREEK_DIALYTIKA_TONOS = 901,
      U_GREEK_KORONIS = 8125,
      U_GREEK_PSILI = 8127,
      U_GREEK_PERISPOMENI = 8128,
      U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129,
      U_GREEK_PSILI_AND_VARIA = 8141,
      U_GREEK_PSILI_AND_OXIA = 8142,
      U_GREEK_PSILI_AND_PERISPOMENI = 8143,
      U_GREEK_DASIA_AND_VARIA = 8157,
      U_GREEK_DASIA_AND_OXIA = 8158,
      U_GREEK_DASIA_AND_PERISPOMENI = 8159,
      U_GREEK_DIALYTIKA_AND_VARIA = 8173,
      U_GREEK_DIALYTIKA_AND_OXIA = 8174,
      U_GREEK_VARIA = 8175,
      U_GREEK_OXIA = 8189,
      U_GREEK_DASIA = 8190,
      U_IDEOGRAPHIC_FULL_STOP = 12290,
      U_LEFT_CORNER_BRACKET = 12300,
      U_RIGHT_CORNER_BRACKET = 12301,
      U_LEFT_BLACK_LENTICULAR_BRACKET = 12304,
      U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305,
      U_OVERLINE = 8254,
      /**
       * UTF-8 BOM
       * Unicode Character 'ZERO WIDTH NO-BREAK SPACE' (U+FEFF)
       * http://www.fileformat.info/info/unicode/char/feff/index.htm
       */
      UTF8_BOM = 65279,
      U_FULLWIDTH_SEMICOLON = 65307,
      U_FULLWIDTH_COMMA = 65292
  }

}
declare module 'vs-diff/src/vs/base/common/diff/diff' {
  export class StringDiffSequence implements ISequence {
      private source;
      constructor(source: string);
      getElements(): Int32Array | number[] | string[];
  }
  export function stringDiff(original: string, modified: string, pretty: boolean): IDiffChange[];
  export interface ISequence {
      getElements(): Int32Array | number[] | string[];
      getStrictElement?(index: number): string;
  }
  export interface IDiffChange {
      /**
       * The position of the first element in the original sequence which
       * this change affects.
       */
      originalStart: number;
      /**
       * The number of elements from the original sequence which were
       * affected.
       */
      originalLength: number;
      /**
       * The position of the first element in the modified sequence which
       * this change affects.
       */
      modifiedStart: number;
      /**
       * The number of elements from the modified sequence which were
       * affected (added).
       */
      modifiedLength: number;
  }
  export interface IContinueProcessingPredicate {
      (furthestOriginalIndex: number, matchLengthOfLongest: number): boolean;
  }
  export interface IDiffResult {
      quitEarly: boolean;
      changes: IDiffChange[];
  }
  /**
   * An implementation of the difference algorithm described in
   * "An O(ND) Difference Algorithm and its variations" by Eugene W. Myers
   */
  export class LcsDiff {
      private readonly ContinueProcessingPredicate;
      private readonly _originalSequence;
      private readonly _modifiedSequence;
      private readonly _hasStrings;
      private readonly _originalStringElements;
      private readonly _originalElementsOrHash;
      private readonly _modifiedStringElements;
      private readonly _modifiedElementsOrHash;
      private m_forwardHistory;
      private m_reverseHistory;
      /**
       * Constructs the DiffFinder
       */
      constructor(originalSequence: ISequence, modifiedSequence: ISequence, continueProcessingPredicate?: IContinueProcessingPredicate | null);
      private static _isStringArray;
      private static _getElements;
      private ElementsAreEqual;
      private ElementsAreStrictEqual;
      private static _getStrictElement;
      private OriginalElementsAreEqual;
      private ModifiedElementsAreEqual;
      ComputeDiff(pretty: boolean): IDiffResult;
      /**
       * Computes the differences between the original and modified input
       * sequences on the bounded range.
       * @returns An array of the differences between the two input sequences.
       */
      private _ComputeDiff;
      /**
       * Private helper method which computes the differences on the bounded range
       * recursively.
       * @returns An array of the differences between the two input sequences.
       */
      private ComputeDiffRecursive;
      private WALKTRACE;
      /**
       * Given the range to compute the diff on, this method finds the point:
       * (midOriginal, midModified)
       * that exists in the middle of the LCS of the two sequences and
       * is the point at which the LCS problem may be broken down recursively.
       * This method will try to keep the LCS trace in memory. If the LCS recursion
       * point is calculated and the full trace is available in memory, then this method
       * will return the change list.
       * @param originalStart The start bound of the original sequence range
       * @param originalEnd The end bound of the original sequence range
       * @param modifiedStart The start bound of the modified sequence range
       * @param modifiedEnd The end bound of the modified sequence range
       * @param midOriginal The middle point of the original sequence range
       * @param midModified The middle point of the modified sequence range
       * @returns The diff changes, if available, otherwise null
       */
      private ComputeRecursionPoint;
      /**
       * Shifts the given changes to provide a more intuitive diff.
       * While the first element in a diff matches the first element after the diff,
       * we shift the diff down.
       *
       * @param changes The list of changes to shift
       * @returns The shifted changes
       */
      private PrettifyChanges;
      private _findBetterContiguousSequence;
      private _contiguousSequenceScore;
      private _OriginalIsBoundary;
      private _OriginalRegionIsBoundary;
      private _ModifiedIsBoundary;
      private _ModifiedRegionIsBoundary;
      private _boundaryScore;
      /**
       * Concatenates the two input DiffChange lists and returns the resulting
       * list.
       * @param The left changes
       * @param The right changes
       * @returns The concatenated list
       */
      private ConcatenateChanges;
      /**
       * Returns true if the two changes overlap and can be merged into a single
       * change
       * @param left The left change
       * @param right The right change
       * @param mergedChange The merged change if the two overlap, null otherwise
       * @returns True if the two changes overlap
       */
      private ChangesOverlap;
      /**
       * Helper method used to clip a diagonal index to the range of valid
       * diagonals. This also decides whether or not the diagonal index,
       * if it exceeds the boundary, should be clipped to the boundary or clipped
       * one inside the boundary depending on the Even/Odd status of the boundary
       * and numDifferences.
       * @param diagonal The index of the diagonal to clip.
       * @param numDifferences The current number of differences being iterated upon.
       * @param diagonalBaseIndex The base reference diagonal.
       * @param numDiagonals The total number of diagonals.
       * @returns The clipped diagonal index.
       */
      private ClipDiagonalBound;
  }

}
declare module 'vs-diff/src/vs/base/common/diff/diffChange' {
  /**
   * Represents information about a specific difference between two sequences.
   */
  export class DiffChange {
      /**
       * The position of the first element in the original sequence which
       * this change affects.
       */
      originalStart: number;
      /**
       * The number of elements from the original sequence which were
       * affected.
       */
      originalLength: number;
      /**
       * The position of the first element in the modified sequence which
       * this change affects.
       */
      modifiedStart: number;
      /**
       * The number of elements from the modified sequence which were
       * affected (added).
       */
      modifiedLength: number;
      /**
       * Constructs a new DiffChange with the given sequence information
       * and content.
       */
      constructor(originalStart: number, originalLength: number, modifiedStart: number, modifiedLength: number);
      /**
       * The end point (exclusive) of the change in the original sequence.
       */
      getOriginalEnd(): number;
      /**
       * The end point (exclusive) of the change in the modified sequence.
       */
      getModifiedEnd(): number;
  }

}
declare module 'vs-diff/src/vs/base/common/errors' {
  export interface ErrorListenerCallback {
      (error: any): void;
  }
  export interface ErrorListenerUnbind {
      (): void;
  }
  export class ErrorHandler {
      private unexpectedErrorHandler;
      private listeners;
      constructor();
      addListener(listener: ErrorListenerCallback): ErrorListenerUnbind;
      private emit;
      private _removeListener;
      setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void;
      getUnexpectedErrorHandler(): (e: any) => void;
      onUnexpectedError(e: any): void;
      onUnexpectedExternalError(e: any): void;
  }
  export const errorHandler: ErrorHandler;
  /** @skipMangle */
  export function setUnexpectedErrorHandler(newUnexpectedErrorHandler: (e: any) => void): void;
  /**
   * Returns if the error is a SIGPIPE error. SIGPIPE errors should generally be
   * logged at most once, to avoid a loop.
   *
   * @see https://github.com/microsoft/vscode-remote-release/issues/6481
   */
  export function isSigPipeError(e: unknown): e is Error;
  export function onUnexpectedError(e: any): undefined;
  export function onUnexpectedExternalError(e: any): undefined;
  export interface SerializedError {
      readonly $isError: true;
      readonly name: string;
      readonly message: string;
      readonly stack: string;
      readonly noTelemetry: boolean;
  }
  export function transformErrorForSerialization(error: Error): SerializedError;
  export function transformErrorForSerialization(error: any): any;
  export interface V8CallSite {
      getThis(): unknown;
      getTypeName(): string | null;
      getFunction(): Function | undefined;
      getFunctionName(): string | null;
      getMethodName(): string | null;
      getFileName(): string | null;
      getLineNumber(): number | null;
      getColumnNumber(): number | null;
      getEvalOrigin(): string | undefined;
      isToplevel(): boolean;
      isEval(): boolean;
      isNative(): boolean;
      isConstructor(): boolean;
      toString(): string;
  }
  /**
   * Checks if the given error is a promise in canceled state
   */
  export function isCancellationError(error: any): boolean;
  export class CancellationError extends Error {
      constructor();
  }
  /**
   * @deprecated use {@link CancellationError `new CancellationError()`} instead
   */
  export function canceled(): Error;
  export function illegalArgument(name?: string): Error;
  export function illegalState(name?: string): Error;
  export function readonly(name?: string): Error;
  export function disposed(what: string): Error;
  export function getErrorMessage(err: any): string;
  export class NotImplementedError extends Error {
      constructor(message?: string);
  }
  export class NotSupportedError extends Error {
      constructor(message?: string);
  }
  export class ExpectedError extends Error {
      readonly isExpected = true;
  }
  /**
   * Error that when thrown won't be logged in telemetry as an unhandled error.
   */
  export class ErrorNoTelemetry extends Error {
      readonly name: string;
      constructor(msg?: string);
      static fromError(err: Error): ErrorNoTelemetry;
      static isErrorNoTelemetry(err: Error): err is ErrorNoTelemetry;
  }
  /**
   * This error indicates a bug.
   * Do not throw this for invalid user input.
   * Only catch this error to recover gracefully from bugs.
   */
  export class BugIndicatingError extends Error {
      constructor(message?: string);
  }

}
declare module 'vs-diff/src/vs/base/common/hash' {
  /**
   * Return a hash value for an object.
   */
  export function hash(obj: any): number;
  export function doHash(obj: any, hashVal: number): number;
  export function numberHash(val: number, initialHashVal: number): number;
  export function stringHash(s: string, hashVal: number): number;
  export class Hasher {
      private _value;
      get value(): number;
      hash(obj: any): number;
  }
  export function toHexString(buffer: ArrayBuffer): string;
  export function toHexString(value: number, bitsize?: number): string;
  /**
   * A SHA1 implementation that works with strings and does not allocate.
   */
  export class StringSHA1 {
      private static _bigBlock32;
      private _h0;
      private _h1;
      private _h2;
      private _h3;
      private _h4;
      private readonly _buff;
      private readonly _buffDV;
      private _buffLen;
      private _totalLen;
      private _leftoverHighSurrogate;
      private _finished;
      constructor();
      update(str: string): void;
      private _push;
      digest(): string;
      private _wrapUp;
      private _step;
  }

}
declare module 'vs-diff/src/vs/base/common/lazy' {
  export class Lazy<T> {
      private readonly executor;
      private _didRun;
      private _value?;
      private _error;
      constructor(executor: () => T);
      /**
       * True if the lazy value has been resolved.
       */
      get hasValue(): boolean;
      /**
       * Get the wrapped value.
       *
       * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
       * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
       */
      get value(): T;
      /**
       * Get the wrapped value without forcing evaluation.
       */
      get rawValue(): T | undefined;
  }

}
declare module 'vs-diff/src/vs/base/common/strings' {
  export function isFalsyOrWhitespace(str: string | undefined): boolean;
  /**
   * Helper to produce a string with a variable number of arguments. Insert variable segments
   * into the string using the {n} notation where N is the index of the argument following the string.
   * @param value string to which formatting is applied
   * @param args replacements for {n}-entries
   */
  export function format(value: string, ...args: any[]): string;
  /**
   * Helper to create a string from a template and a string record.
   * Similar to `format` but with objects instead of positional arguments.
   */
  export function format2(template: string, values: Record<string, unknown>): string;
  /**
   * Converts HTML characters inside the string to use entities instead. Makes the string safe from
   * being used e.g. in HTMLElement.innerHTML.
   */
  export function escape(html: string): string;
  /**
   * Escapes regular expression characters in a given string
   */
  export function escapeRegExpCharacters(value: string): string;
  /**
   * Counts how often `character` occurs inside `value`.
   */
  export function count(value: string, character: string): number;
  export function truncate(value: string, maxLength: number, suffix?: string): string;
  /**
   * Removes all occurrences of needle from the beginning and end of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim (default is a blank)
   */
  export function trim(haystack: string, needle?: string): string;
  /**
   * Removes all occurrences of needle from the beginning of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim
   */
  export function ltrim(haystack: string, needle: string): string;
  /**
   * Removes all occurrences of needle from the end of haystack.
   * @param haystack string to trim
   * @param needle the thing to trim
   */
  export function rtrim(haystack: string, needle: string): string;
  export function convertSimple2RegExpPattern(pattern: string): string;
  export function stripWildcards(pattern: string): string;
  export interface RegExpOptions {
      matchCase?: boolean;
      wholeWord?: boolean;
      multiline?: boolean;
      global?: boolean;
      unicode?: boolean;
  }
  export function createRegExp(searchString: string, isRegex: boolean, options?: RegExpOptions): RegExp;
  export function regExpLeadsToEndlessLoop(regexp: RegExp): boolean;
  export function regExpContainsBackreference(regexpValue: string): boolean;
  export function regExpFlags(regexp: RegExp): string;
  export function splitLines(str: string): string[];
  /**
   * Returns first index of the string that is not whitespace.
   * If string is empty or contains only whitespaces, returns -1
   */
  export function firstNonWhitespaceIndex(str: string): number;
  /**
   * Returns the leading whitespace of the string.
   * If the string contains only whitespaces, returns entire string
   */
  export function getLeadingWhitespace(str: string, start?: number, end?: number): string;
  /**
   * Returns last index of the string that is not whitespace.
   * If string is empty or contains only whitespaces, returns -1
   */
  export function lastNonWhitespaceIndex(str: string, startIndex?: number): number;
  /**
   * Function that works identically to String.prototype.replace, except, the
   * replace function is allowed to be async and return a Promise.
   */
  export function replaceAsync(str: string, search: RegExp, replacer: (match: string, ...args: any[]) => Promise<string>): Promise<string>;
  export function compare(a: string, b: string): number;
  export function compareSubstring(a: string, b: string, aStart?: number, aEnd?: number, bStart?: number, bEnd?: number): number;
  export function compareIgnoreCase(a: string, b: string): number;
  export function compareSubstringIgnoreCase(a: string, b: string, aStart?: number, aEnd?: number, bStart?: number, bEnd?: number): number;
  export function isAsciiDigit(code: number): boolean;
  export function isLowerAsciiLetter(code: number): boolean;
  export function isUpperAsciiLetter(code: number): boolean;
  export function equalsIgnoreCase(a: string, b: string): boolean;
  export function startsWithIgnoreCase(str: string, candidate: string): boolean;
  /**
   * @returns the length of the common prefix of the two strings.
   */
  export function commonPrefixLength(a: string, b: string): number;
  /**
   * @returns the length of the common suffix of the two strings.
   */
  export function commonSuffixLength(a: string, b: string): number;
  /**
   * See http://en.wikipedia.org/wiki/Surrogate_pair
   */
  export function isHighSurrogate(charCode: number): boolean;
  /**
   * See http://en.wikipedia.org/wiki/Surrogate_pair
   */
  export function isLowSurrogate(charCode: number): boolean;
  /**
   * See http://en.wikipedia.org/wiki/Surrogate_pair
   */
  export function computeCodePoint(highSurrogate: number, lowSurrogate: number): number;
  /**
   * get the code point that begins at offset `offset`
   */
  export function getNextCodePoint(str: string, len: number, offset: number): number;
  export class CodePointIterator {
      private readonly _str;
      private readonly _len;
      private _offset;
      get offset(): number;
      constructor(str: string, offset?: number);
      setOffset(offset: number): void;
      prevCodePoint(): number;
      nextCodePoint(): number;
      eol(): boolean;
  }
  export class GraphemeIterator {
      private readonly _iterator;
      get offset(): number;
      constructor(str: string, offset?: number);
      nextGraphemeLength(): number;
      prevGraphemeLength(): number;
      eol(): boolean;
  }
  export function nextCharLength(str: string, initialOffset: number): number;
  export function prevCharLength(str: string, initialOffset: number): number;
  export function getCharContainingOffset(str: string, offset: number): [number, number];
  export function charCount(str: string): number;
  /**
   * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
   */
  export function containsRTL(str: string): boolean;
  /**
   * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
   */
  export function isBasicASCII(str: string): boolean;
  export const UNUSUAL_LINE_TERMINATORS: RegExp;
  /**
   * Returns true if `str` contains unusual line terminators, like LS or PS
   */
  export function containsUnusualLineTerminators(str: string): boolean;
  export function isFullWidthCharacter(charCode: number): boolean;
  /**
   * A fast function (therefore imprecise) to check if code points are emojis.
   * Generated using https://github.com/alexdima/unicode-utils/blob/main/emoji-test.js
   */
  export function isEmojiImprecise(x: number): boolean;
  /**
   * Given a string and a max length returns a shorted version. Shorting
   * happens at favorable positions - such as whitespace or punctuation characters.
   */
  export function lcut(text: string, n: number): string;
  export function removeAnsiEscapeCodes(str: string): string;
  export const UTF8_BOM_CHARACTER: string;
  export function startsWithUTF8BOM(str: string): boolean;
  export function stripUTF8BOM(str: string): string;
  /**
   * Checks if the characters of the provided query string are included in the
   * target string. The characters do not have to be contiguous within the string.
   */
  export function fuzzyContains(target: string, query: string): boolean;
  export function containsUppercaseCharacter(target: string, ignoreEscapedChars?: boolean): boolean;
  export function uppercaseFirstLetter(str: string): string;
  export function getNLines(str: string, n?: number): string;
  /**
   * Produces 'a'-'z', followed by 'A'-'Z'... followed by 'a'-'z', etc.
   */
  export function singleLetterHash(n: number): string;
  export function getGraphemeBreakType(codePoint: number): GraphemeBreakType;
  export const enum GraphemeBreakType {
      Other = 0,
      Prepend = 1,
      CR = 2,
      LF = 3,
      Control = 4,
      Extend = 5,
      Regional_Indicator = 6,
      SpacingMark = 7,
      L = 8,
      V = 9,
      T = 10,
      LV = 11,
      LVT = 12,
      ZWJ = 13,
      Extended_Pictographic = 14
  }
  /**
   * Computes the offset after performing a left delete on the given string,
   * while considering unicode grapheme/emoji rules.
  */
  export function getLeftDeleteOffset(offset: number, str: string): number;
  export const noBreakWhitespace = "\u00A0";
  export class AmbiguousCharacters {
      private readonly confusableDictionary;
      private static readonly ambiguousCharacterData;
      private static readonly cache;
      static getInstance(locales: Set<string>): AmbiguousCharacters;
      private static _locales;
      static getLocales(): string[];
      private constructor();
      isAmbiguous(codePoint: number): boolean;
      /**
       * Returns the non basic ASCII code point that the given code point can be confused,
       * or undefined if such code point does note exist.
       */
      getPrimaryConfusable(codePoint: number): number | undefined;
      getConfusableCodePoints(): ReadonlySet<number>;
  }
  export class InvisibleCharacters {
      private static getRawData;
      private static _data;
      private static getData;
      static isInvisibleCharacter(codePoint: number): boolean;
      static get codePoints(): ReadonlySet<number>;
  }

}
declare module 'vs-diff/src/vs/base/common/uint' {
  export const enum Constants {
      /**
       * MAX SMI (SMall Integer) as defined in v8.
       * one bit is lost for boxing/unboxing flag.
       * one bit is lost for sign flag.
       * See https://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/#tagged-values
       */
      MAX_SAFE_SMALL_INTEGER = 1073741824,
      /**
       * MIN SMI (SMall Integer) as defined in v8.
       * one bit is lost for boxing/unboxing flag.
       * one bit is lost for sign flag.
       * See https://thibaultlaurens.github.io/javascript/2013/04/29/how-the-v8-engine-works/#tagged-values
       */
      MIN_SAFE_SMALL_INTEGER = -1073741824,
      /**
       * Max unsigned integer that fits on 8 bits.
       */
      MAX_UINT_8 = 255,
      /**
       * Max unsigned integer that fits on 16 bits.
       */
      MAX_UINT_16 = 65535,
      /**
       * Max unsigned integer that fits on 32 bits.
       */
      MAX_UINT_32 = 4294967295,
      UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536
  }
  export function toUint8(v: number): number;
  export function toUint32(v: number): number;

}
declare module 'vs-diff/src/vs/editor/common/core/lineRange' {
  import { Range } from 'vs-diff/src/vs/editor/common/core/range';
  /**
   * A range of lines (1-based).
   */
  export class LineRange {
      static fromRange(range: Range): LineRange;
      static subtract(a: LineRange, b: LineRange | undefined): LineRange[];
      /**
       * @param lineRanges An array of sorted line ranges.
       */
      static joinMany(lineRanges: readonly (readonly LineRange[])[]): readonly LineRange[];
      /**
       * @param lineRanges1 Must be sorted.
       * @param lineRanges2 Must be sorted.
       */
      static join(lineRanges1: readonly LineRange[], lineRanges2: readonly LineRange[]): readonly LineRange[];
      static ofLength(startLineNumber: number, length: number): LineRange;
      /**
       * @internal
       */
      static deserialize(lineRange: ISerializedLineRange): LineRange;
      /**
       * The start line number.
       */
      readonly startLineNumber: number;
      /**
       * The end line number (exclusive).
       */
      readonly endLineNumberExclusive: number;
      constructor(startLineNumber: number, endLineNumberExclusive: number);
      /**
       * Indicates if this line range contains the given line number.
       */
      contains(lineNumber: number): boolean;
      /**
       * Indicates if this line range is empty.
       */
      get isEmpty(): boolean;
      /**
       * Moves this line range by the given offset of line numbers.
       */
      delta(offset: number): LineRange;
      /**
       * The number of lines this line range spans.
       */
      get length(): number;
      /**
       * Creates a line range that combines this and the given line range.
       */
      join(other: LineRange): LineRange;
      toString(): string;
      /**
       * The resulting range is empty if the ranges do not intersect, but touch.
       * If the ranges don't even touch, the result is undefined.
       */
      intersect(other: LineRange): LineRange | undefined;
      intersectsStrict(other: LineRange): boolean;
      overlapOrTouch(other: LineRange): boolean;
      equals(b: LineRange): boolean;
      toInclusiveRange(): Range | null;
      toExclusiveRange(): Range;
      mapToLineArray<T>(f: (lineNumber: number) => T): T[];
      /**
       * @internal
       */
      serialize(): ISerializedLineRange;
      includes(lineNumber: number): boolean;
  }
  export type ISerializedLineRange = [startLineNumber: number, endLineNumberExclusive: number];

}
declare module 'vs-diff/src/vs/editor/common/core/offsetRange' {
  /**
   * A range of offsets (0-based).
  */
  export class OffsetRange {
      readonly start: number;
      readonly endExclusive: number;
      static addRange(range: OffsetRange, sortedRanges: OffsetRange[]): void;
      static tryCreate(start: number, endExclusive: number): OffsetRange | undefined;
      constructor(start: number, endExclusive: number);
      get isEmpty(): boolean;
      delta(offset: number): OffsetRange;
      get length(): number;
      toString(): string;
      equals(other: OffsetRange): boolean;
      containsRange(other: OffsetRange): boolean;
      contains(offset: number): boolean;
      /**
       * for all numbers n: range1.contains(n) or range2.contains(n) => range1.join(range2).contains(n)
       * The joined range is the smallest range that contains both ranges.
       */
      join(other: OffsetRange): OffsetRange;
      /**
       * for all numbers n: range1.contains(n) and range2.contains(n) <=> range1.intersect(range2).contains(n)
       *
       * The resulting range is empty if the ranges do not intersect, but touch.
       * If the ranges don't even touch, the result is undefined.
       */
      intersect(other: OffsetRange): OffsetRange | undefined;
  }

}
declare module 'vs-diff/src/vs/editor/common/core/position' {
  /**
   * A position in the editor. This interface is suitable for serialization.
   */
  export interface IPosition {
      /**
       * line number (starts at 1)
       */
      readonly lineNumber: number;
      /**
       * column (the first character in a line is between column 1 and column 2)
       */
      readonly column: number;
  }
  /**
   * A position in the editor.
   */
  export class Position {
      /**
       * line number (starts at 1)
       */
      readonly lineNumber: number;
      /**
       * column (the first character in a line is between column 1 and column 2)
       */
      readonly column: number;
      constructor(lineNumber: number, column: number);
      /**
       * Create a new position from this position.
       *
       * @param newLineNumber new line number
       * @param newColumn new column
       */
      with(newLineNumber?: number, newColumn?: number): Position;
      /**
       * Derive a new position from this position.
       *
       * @param deltaLineNumber line number delta
       * @param deltaColumn column delta
       */
      delta(deltaLineNumber?: number, deltaColumn?: number): Position;
      /**
       * Test if this position equals other position
       */
      equals(other: IPosition): boolean;
      /**
       * Test if position `a` equals position `b`
       */
      static equals(a: IPosition | null, b: IPosition | null): boolean;
      /**
       * Test if this position is before other position.
       * If the two positions are equal, the result will be false.
       */
      isBefore(other: IPosition): boolean;
      /**
       * Test if position `a` is before position `b`.
       * If the two positions are equal, the result will be false.
       */
      static isBefore(a: IPosition, b: IPosition): boolean;
      /**
       * Test if this position is before other position.
       * If the two positions are equal, the result will be true.
       */
      isBeforeOrEqual(other: IPosition): boolean;
      /**
       * Test if position `a` is before position `b`.
       * If the two positions are equal, the result will be true.
       */
      static isBeforeOrEqual(a: IPosition, b: IPosition): boolean;
      /**
       * A function that compares positions, useful for sorting
       */
      static compare(a: IPosition, b: IPosition): number;
      /**
       * Clone this position.
       */
      clone(): Position;
      /**
       * Convert to a human-readable representation.
       */
      toString(): string;
      /**
       * Create a `Position` from an `IPosition`.
       */
      static lift(pos: IPosition): Position;
      /**
       * Test if `obj` is an `IPosition`.
       */
      static isIPosition(obj: any): obj is IPosition;
  }

}
declare module 'vs-diff/src/vs/editor/common/core/range' {
  import { IPosition, Position } from 'vs-diff/src/vs/editor/common/core/position';
  /**
   * A range in the editor. This interface is suitable for serialization.
   */
  export interface IRange {
      /**
       * Line number on which the range starts (starts at 1).
       */
      readonly startLineNumber: number;
      /**
       * Column on which the range starts in line `startLineNumber` (starts at 1).
       */
      readonly startColumn: number;
      /**
       * Line number on which the range ends.
       */
      readonly endLineNumber: number;
      /**
       * Column on which the range ends in line `endLineNumber`.
       */
      readonly endColumn: number;
  }
  /**
   * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
   */
  export class Range {
      /**
       * Line number on which the range starts (starts at 1).
       */
      readonly startLineNumber: number;
      /**
       * Column on which the range starts in line `startLineNumber` (starts at 1).
       */
      readonly startColumn: number;
      /**
       * Line number on which the range ends.
       */
      readonly endLineNumber: number;
      /**
       * Column on which the range ends in line `endLineNumber`.
       */
      readonly endColumn: number;
      constructor(startLineNumber: number, startColumn: number, endLineNumber: number, endColumn: number);
      /**
       * Test if this range is empty.
       */
      isEmpty(): boolean;
      /**
       * Test if `range` is empty.
       */
      static isEmpty(range: IRange): boolean;
      /**
       * Test if position is in this range. If the position is at the edges, will return true.
       */
      containsPosition(position: IPosition): boolean;
      /**
       * Test if `position` is in `range`. If the position is at the edges, will return true.
       */
      static containsPosition(range: IRange, position: IPosition): boolean;
      /**
       * Test if `position` is in `range`. If the position is at the edges, will return false.
       * @internal
       */
      static strictContainsPosition(range: IRange, position: IPosition): boolean;
      /**
       * Test if range is in this range. If the range is equal to this range, will return true.
       */
      containsRange(range: IRange): boolean;
      /**
       * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
       */
      static containsRange(range: IRange, otherRange: IRange): boolean;
      /**
       * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
       */
      strictContainsRange(range: IRange): boolean;
      /**
       * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
       */
      static strictContainsRange(range: IRange, otherRange: IRange): boolean;
      /**
       * A reunion of the two ranges.
       * The smallest position will be used as the start point, and the largest one as the end point.
       */
      plusRange(range: IRange): Range;
      /**
       * A reunion of the two ranges.
       * The smallest position will be used as the start point, and the largest one as the end point.
       */
      static plusRange(a: IRange, b: IRange): Range;
      /**
       * A intersection of the two ranges.
       */
      intersectRanges(range: IRange): Range | null;
      /**
       * A intersection of the two ranges.
       */
      static intersectRanges(a: IRange, b: IRange): Range | null;
      /**
       * Test if this range equals other.
       */
      equalsRange(other: IRange | null | undefined): boolean;
      /**
       * Test if range `a` equals `b`.
       */
      static equalsRange(a: IRange | null | undefined, b: IRange | null | undefined): boolean;
      /**
       * Return the end position (which will be after or equal to the start position)
       */
      getEndPosition(): Position;
      /**
       * Return the end position (which will be after or equal to the start position)
       */
      static getEndPosition(range: IRange): Position;
      /**
       * Return the start position (which will be before or equal to the end position)
       */
      getStartPosition(): Position;
      /**
       * Return the start position (which will be before or equal to the end position)
       */
      static getStartPosition(range: IRange): Position;
      /**
       * Transform to a user presentable string representation.
       */
      toString(): string;
      /**
       * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
       */
      setEndPosition(endLineNumber: number, endColumn: number): Range;
      /**
       * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
       */
      setStartPosition(startLineNumber: number, startColumn: number): Range;
      /**
       * Create a new empty range using this range's start position.
       */
      collapseToStart(): Range;
      /**
       * Create a new empty range using this range's start position.
       */
      static collapseToStart(range: IRange): Range;
      /**
       * Create a new empty range using this range's end position.
       */
      collapseToEnd(): Range;
      /**
       * Create a new empty range using this range's end position.
       */
      static collapseToEnd(range: IRange): Range;
      /**
       * Moves the range by the given amount of lines.
       */
      delta(lineCount: number): Range;
      static fromPositions(start: IPosition, end?: IPosition): Range;
      /**
       * Create a `Range` from an `IRange`.
       */
      static lift(range: undefined | null): null;
      static lift(range: IRange): Range;
      static lift(range: IRange | undefined | null): Range | null;
      /**
       * Test if `obj` is an `IRange`.
       */
      static isIRange(obj: any): obj is IRange;
      /**
       * Test if the two ranges are touching in any way.
       */
      static areIntersectingOrTouching(a: IRange, b: IRange): boolean;
      /**
       * Test if the two ranges are intersecting. If the ranges are touching it returns true.
       */
      static areIntersecting(a: IRange, b: IRange): boolean;
      /**
       * A function that compares ranges, useful for sorting ranges
       * It will first compare ranges on the startPosition and then on the endPosition
       */
      static compareRangesUsingStarts(a: IRange | null | undefined, b: IRange | null | undefined): number;
      /**
       * A function that compares ranges, useful for sorting ranges
       * It will first compare ranges on the endPosition and then on the startPosition
       */
      static compareRangesUsingEnds(a: IRange, b: IRange): number;
      /**
       * Test if the range spans multiple lines.
       */
      static spansMultipleLines(range: IRange): boolean;
      toJSON(): IRange;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/algorithms/diffAlgorithm' {
  import { OffsetRange } from 'vs-diff/src/vs/editor/common/core/offsetRange';
  /**
   * Represents a synchronous diff algorithm. Should be executed in a worker.
  */
  export interface IDiffAlgorithm {
      compute(sequence1: ISequence, sequence2: ISequence, timeout?: ITimeout): DiffAlgorithmResult;
  }
  export class DiffAlgorithmResult {
      readonly diffs: SequenceDiff[];
      /**
       * Indicates if the time out was reached.
       * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
       */
      readonly hitTimeout: boolean;
      static trivial(seq1: ISequence, seq2: ISequence): DiffAlgorithmResult;
      static trivialTimedOut(seq1: ISequence, seq2: ISequence): DiffAlgorithmResult;
      constructor(diffs: SequenceDiff[], 
      /**
       * Indicates if the time out was reached.
       * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
       */
      hitTimeout: boolean);
  }
  export class SequenceDiff {
      readonly seq1Range: OffsetRange;
      readonly seq2Range: OffsetRange;
      constructor(seq1Range: OffsetRange, seq2Range: OffsetRange);
      reverse(): SequenceDiff;
      toString(): string;
      join(other: SequenceDiff): SequenceDiff;
      delta(offset: number): SequenceDiff;
  }
  export interface ISequence {
      getElement(offset: number): number;
      get length(): number;
      /**
       * The higher the score, the better that offset can be used to split the sequence.
       * Is used to optimize insertions.
       * Must not be negative.
      */
      getBoundaryScore?(length: number): number;
  }
  export interface ITimeout {
      isValid(): boolean;
  }
  export class InfiniteTimeout implements ITimeout {
      static instance: InfiniteTimeout;
      isValid(): boolean;
  }
  export class DateTimeout implements ITimeout {
      private timeout;
      private readonly startTime;
      private valid;
      constructor(timeout: number);
      isValid(): boolean;
      disable(): void;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/algorithms/dynamicProgrammingDiffing' {
  import { IDiffAlgorithm, ISequence, ITimeout, DiffAlgorithmResult } from 'vs-diff/src/vs/editor/common/diff/algorithms/diffAlgorithm';
  /**
   * A O(MN) diffing algorithm that supports a score function.
   * The algorithm can be improved by processing the 2d array diagonally.
  */
  export class DynamicProgrammingDiffing implements IDiffAlgorithm {
      compute(sequence1: ISequence, sequence2: ISequence, timeout?: ITimeout, equalityScore?: (offset1: number, offset2: number) => number): DiffAlgorithmResult;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/algorithms/joinSequenceDiffs' {
  import { ISequence, SequenceDiff } from 'vs-diff/src/vs/editor/common/diff/algorithms/diffAlgorithm';
  export function optimizeSequenceDiffs(sequence1: ISequence, sequence2: ISequence, sequenceDiffs: SequenceDiff[]): SequenceDiff[];
  export function smoothenSequenceDiffs(sequence1: ISequence, sequence2: ISequence, sequenceDiffs: SequenceDiff[]): SequenceDiff[];
  /**
   * This function fixes issues like this:
   * ```
   * import { Baz, Bar } from "foo";
   * ```
   * <->
   * ```
   * import { Baz, Bar, Foo } from "foo";
   * ```
   * Computed diff: [ {Add "," after Bar}, {Add "Foo " after space} }
   * Improved diff: [{Add ", Foo" after Bar}]
   */
  export function joinSequenceDiffs(sequence1: ISequence, sequence2: ISequence, sequenceDiffs: SequenceDiff[]): SequenceDiff[];
  export function shiftSequenceDiffs(sequence1: ISequence, sequence2: ISequence, sequenceDiffs: SequenceDiff[]): SequenceDiff[];

}
declare module 'vs-diff/src/vs/editor/common/diff/algorithms/myersDiffAlgorithm' {
  import { DiffAlgorithmResult, IDiffAlgorithm, ISequence, ITimeout } from 'vs-diff/src/vs/editor/common/diff/algorithms/diffAlgorithm';
  /**
   * An O(ND) diff algorithm that has a quadratic space worst-case complexity.
  */
  export class MyersDiffAlgorithm implements IDiffAlgorithm {
      compute(seq1: ISequence, seq2: ISequence, timeout?: ITimeout): DiffAlgorithmResult;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/algorithms/utils' {
  export class Array2D<T> {
      readonly width: number;
      readonly height: number;
      private readonly array;
      constructor(width: number, height: number);
      get(x: number, y: number): T;
      set(x: number, y: number, value: T): void;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/linesDiffComputer' {
  import { LineRange } from 'vs-diff/src/vs/editor/common/core/lineRange';
  import { Range } from 'vs-diff/src/vs/editor/common/core/range';
  export interface ILinesDiffComputer {
      computeDiff(originalLines: string[], modifiedLines: string[], options: ILinesDiffComputerOptions): LinesDiff;
  }
  export interface ILinesDiffComputerOptions {
      readonly ignoreTrimWhitespace: boolean;
      readonly maxComputationTimeMs: number;
      readonly computeMoves: boolean;
  }
  export class LinesDiff {
      readonly changes: readonly LineRangeMapping[];
      /**
       * Sorted by original line ranges.
       * The original line ranges and the modified line ranges must be disjoint (but can be touching).
       */
      readonly moves: readonly MovedText[];
      /**
       * Indicates if the time out was reached.
       * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
       */
      readonly hitTimeout: boolean;
      constructor(changes: readonly LineRangeMapping[], 
      /**
       * Sorted by original line ranges.
       * The original line ranges and the modified line ranges must be disjoint (but can be touching).
       */
      moves: readonly MovedText[], 
      /**
       * Indicates if the time out was reached.
       * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
       */
      hitTimeout: boolean);
  }
  /**
   * Maps a line range in the original text model to a line range in the modified text model.
   */
  export class LineRangeMapping {
      static inverse(mapping: readonly LineRangeMapping[], originalLineCount: number, modifiedLineCount: number): LineRangeMapping[];
      /**
       * The line range in the original text model.
       */
      readonly originalRange: LineRange;
      /**
       * The line range in the modified text model.
       */
      readonly modifiedRange: LineRange;
      /**
       * If inner changes have not been computed, this is set to undefined.
       * Otherwise, it represents the character-level diff in this line range.
       * The original range of each range mapping should be contained in the original line range (same for modified), exceptions are new-lines.
       * Must not be an empty array.
       */
      readonly innerChanges: RangeMapping[] | undefined;
      constructor(originalRange: LineRange, modifiedRange: LineRange, innerChanges: RangeMapping[] | undefined);
      toString(): string;
      get changedLineCount(): number;
      flip(): LineRangeMapping;
  }
  /**
   * Maps a range in the original text model to a range in the modified text model.
   */
  export class RangeMapping {
      /**
       * The original range.
       */
      readonly originalRange: Range;
      /**
       * The modified range.
       */
      readonly modifiedRange: Range;
      constructor(originalRange: Range, modifiedRange: Range);
      toString(): string;
      flip(): RangeMapping;
  }
  export class SimpleLineRangeMapping {
      readonly originalRange: LineRange;
      readonly modifiedRange: LineRange;
      constructor(originalRange: LineRange, modifiedRange: LineRange);
      toString(): string;
      flip(): SimpleLineRangeMapping;
  }
  export class MovedText {
      readonly lineRangeMapping: SimpleLineRangeMapping;
      /**
       * The diff from the original text to the moved text.
       * Must be contained in the original/modified line range.
       * Can be empty if the text didn't change (only moved).
       */
      readonly changes: readonly LineRangeMapping[];
      constructor(lineRangeMapping: SimpleLineRangeMapping, changes: readonly LineRangeMapping[]);
      flip(): MovedText;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/linesDiffComputers' {
  import { SmartLinesDiffComputer } from 'vs-diff/src/vs/editor/common/diff/smartLinesDiffComputer';
  import { StandardLinesDiffComputer } from 'vs-diff/src/vs/editor/common/diff/standardLinesDiffComputer';
  export const linesDiffComputers: {
      getLegacy: () => SmartLinesDiffComputer;
      getAdvanced: () => StandardLinesDiffComputer;
  };

}
declare module 'vs-diff/src/vs/editor/common/diff/smartLinesDiffComputer' {
  import { ILinesDiffComputer, ILinesDiffComputerOptions, LineRangeMapping, LinesDiff } from 'vs-diff/src/vs/editor/common/diff/linesDiffComputer';
  export class SmartLinesDiffComputer implements ILinesDiffComputer {
      computeDiff(originalLines: string[], modifiedLines: string[], options: ILinesDiffComputerOptions): LinesDiff;
  }
  export interface IDiffComputationResult {
      quitEarly: boolean;
      identical: boolean;
      /**
       * The changes as (legacy) line change array.
       * @deprecated Use `changes2` instead.
       */
      changes: ILineChange[];
      /**
       * The changes as (modern) line range mapping array.
       */
      changes2: readonly LineRangeMapping[];
  }
  /**
   * A change
   */
  export interface IChange {
      readonly originalStartLineNumber: number;
      readonly originalEndLineNumber: number;
      readonly modifiedStartLineNumber: number;
      readonly modifiedEndLineNumber: number;
  }
  /**
   * A character level change.
   */
  export interface ICharChange extends IChange {
      readonly originalStartColumn: number;
      readonly originalEndColumn: number;
      readonly modifiedStartColumn: number;
      readonly modifiedEndColumn: number;
  }
  /**
   * A line change
   */
  export interface ILineChange extends IChange {
      readonly charChanges: ICharChange[] | undefined;
  }
  export interface IDiffComputerResult {
      quitEarly: boolean;
      changes: ILineChange[];
  }
  export interface IDiffComputerOpts {
      shouldComputeCharChanges: boolean;
      shouldPostProcessCharChanges: boolean;
      shouldIgnoreTrimWhitespace: boolean;
      shouldMakePrettyDiff: boolean;
      maxComputationTime: number;
  }
  export class DiffComputer {
      private readonly shouldComputeCharChanges;
      private readonly shouldPostProcessCharChanges;
      private readonly shouldIgnoreTrimWhitespace;
      private readonly shouldMakePrettyDiff;
      private readonly originalLines;
      private readonly modifiedLines;
      private readonly original;
      private readonly modified;
      private readonly continueLineDiff;
      private readonly continueCharDiff;
      constructor(originalLines: string[], modifiedLines: string[], opts: IDiffComputerOpts);
      computeDiff(): IDiffComputerResult;
      private _pushTrimWhitespaceCharChange;
      private _mergeTrimWhitespaceCharChange;
  }

}
declare module 'vs-diff/src/vs/editor/common/diff/standardLinesDiffComputer' {
  import { ISequence } from 'vs-diff/src/vs/editor/common/diff/algorithms/diffAlgorithm';
  import { ILinesDiffComputer, ILinesDiffComputerOptions, LineRangeMapping, LinesDiff, RangeMapping } from 'vs-diff/src/vs/editor/common/diff/linesDiffComputer';
  export class StandardLinesDiffComputer implements ILinesDiffComputer {
      private readonly dynamicProgrammingDiffing;
      private readonly myersDiffingAlgorithm;
      computeDiff(originalLines: string[], modifiedLines: string[], options: ILinesDiffComputerOptions): LinesDiff;
      private refineDiff;
  }
  export function lineRangeMappingFromRangeMappings(alignments: RangeMapping[], originalLines: string[], modifiedLines: string[], dontAssertStartLine?: boolean): LineRangeMapping[];
  export function getLineRangeMapping(rangeMapping: RangeMapping, originalLines: string[], modifiedLines: string[]): LineRangeMapping;
  export class LineSequence implements ISequence {
      private readonly trimmedHash;
      private readonly lines;
      constructor(trimmedHash: number[], lines: string[]);
      getElement(offset: number): number;
      get length(): number;
      getBoundaryScore(length: number): number;
  }

}
declare module 'vs-diff' {
  import main = require('vs-diff/src/index');
  export = main;
}