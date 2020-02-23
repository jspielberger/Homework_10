module.exports = function(teamMembers) {
    if(teamMembers.length === 0) return;
    
    //define empty strings for inserting js info
    let manager_box = "";
    let engineer_box = "";
    let intern_box = "";

    //choose from compiled employee info 
    for(member of teamMembers) {
        switch(member.getRole()) {
            case "Manager":
                manager_box += 
                `<div class="card employee-card">>
        `
    }
    }
}

