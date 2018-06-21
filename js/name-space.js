var MYAPP = MYAPP || {}; 

MYAPP.namespace = function (ns_string) { 

    var parts = ns_string.split('.'), 
        parent = MYAPP,
        i; 
    
    // 처음에 중복되는 전역 객체명은 제거한다. 
    if(parts[0] === 'MYAPP') { 
        parts = parts.slice(1);
    }    
    for (i = 0; i < parts.length; i += 1) { 
        // 프로퍼티가 존재하지 않는다면 생성한다. 
        if(typeof parent[parts[i]] === 'undefined') { 
            parent[parts[i]] = {}; 
        } 
        parent = parent[parts[i]]; 
    } 
    return parent; 
};