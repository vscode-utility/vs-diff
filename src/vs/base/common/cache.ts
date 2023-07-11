/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Uses a LRU cache to make a given parametrized function cached.
 * Caches just the last value.
 * The key must be JSON serializable.
 */
export class LRUCachedFunction<TArg, TComputed> {
    private lastCache: TComputed | undefined = undefined;
    private lastArgKey: string | undefined = undefined;

    constructor(private readonly fn: (arg: TArg) => TComputed) {}

    public get(arg: TArg): TComputed {
        const key = JSON.stringify(arg);
        if (this.lastArgKey !== key) {
            this.lastArgKey = key;
            this.lastCache = this.fn(arg);
        }
        return this.lastCache!;
    }
}
