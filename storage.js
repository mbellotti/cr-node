"use strict";

class Tracker{
    constructor(id) {
      this.id = id;
      this.log = new Map()
    }

    getStats(id){
      if(this.log.has(id)){
        return this.log.get(id);
      }
      return false;
    }

    setStats(id, data){
      data['CPU'] = data.hasOwnProperty('CPU') && !isNaN(data['CPU']) ? data['CPU'] : 0;
      data['memory_free'] =  data.hasOwnProperty('memory_free') && !isNaN(data['memory_free']) ? data['memory_free'] : 0;
      this.log.set(id, data);
      return true;
    }

};

module.exports = Tracker;
