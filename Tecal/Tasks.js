"use strict";
class teacher {
    constructor(name_, id_) {
        this.ident = id_;
        this.name = name_;
    }
    show_student_result(time) {
        for (var i = 0; i < time; i++) {
            console.log(name);
            console.log(ident);
        }
        // show every students resultxs
    }
}
exports.teacher = teacher;
let ah = new teacher("dima", 4);
ah.show_student_result(10);
//# sourceMappingURL=Tasks.js.map