/**
 * 缓存工具类，缓存组件信息
 */

interface CacheOptions {
    /**
     * 缓存过期时间（毫秒）
     */
    ttl: number
}

interface CacheItem<Value> {
    /**
     * 过期时间戳
     */
    expireAt: number
    /**
     * 缓存值
     */
    value: Value
}

const DEFAULT_TTL = 1000 * 60 * 10;

/**
 * 缓存工具类
 * 默认过期时间 10 分钟
 */
export class Cache<CacheData extends Record<string, any>> {
    private cache: Map<keyof CacheData, CacheItem<CacheData[keyof CacheData]>> = new Map()
    private ttl: number;

    constructor(options?: CacheOptions) {
      this.ttl = options?.ttl || DEFAULT_TTL;
    }

    /**
     * 缓存组件信息
     * @param key 
     * @param value 
     */
    public set<CacheKey extends keyof CacheData>(key: CacheKey, value: CacheData[CacheKey]) {
      this.cache.set(key, {
        expireAt: Date.now() + this.ttl,
        value
      })
    }

    /**
     * 获取组件信息
     * @param key 组件key
     * @returns 组件信息
     */
    public get<CacheKey extends keyof CacheData>(key: CacheKey): CacheData[CacheKey] | undefined {
        const value = this.cache.get(key)
        if (!value) return undefined

        if (value.expireAt <= Date.now()) {
            this.cache.delete(key)
            return undefined
        }

        return value.value
    }
    /**
     * 删除组件信息
     * @param key 组件key
     */
    public delete(key: keyof CacheData) {
        this.cache.delete(key)
    }

    /**
     * 清空缓存
     */
    public clear() {
        this.cache.clear()
    }
}