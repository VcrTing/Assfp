
const _data = function(res: any, def = [ ]) { return res ? res.data : def }

const _insert = function(res: any ) { return { id: res.id, ...res.attributes } }

const reset = function(res: any, out: boolean) {
    res = out ? _data(res) : res
    return res ? ( (res.constructor == Array) ? res.map( e => _insert(e) ) : (res ? _insert(res) : null) ) : [ ]
}

export default {
    reset
}