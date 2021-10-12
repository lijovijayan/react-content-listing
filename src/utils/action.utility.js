export class ActionUtility {
    static createAction(type, payload = undefined, error = false, meta = null) {
        return {
            type,
            payload,
            error,
            meta
        }
    }
}
