define("iperson", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("abstract-human", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Human {
        constructor(name) {
            this.name = name;
        }
    }
    exports.default = Human;
});
define("ihero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("person", ["require", "exports", "abstract-human"], function (require, exports, abstract_human_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person extends abstract_human_1.default {
        constructor(name) {
            super(name);
        }
        showAge() {
            return this.age;
        }
    }
    exports.default = Person;
});
define("hero", ["require", "exports", "person"], function (require, exports, person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Hero extends person_1.default {
        constructor(name) {
            super(name);
            this.superpowers = [];
        }
        addPower(power) {
            this.superpowers.push(power);
        }
        listPowers() {
            return this.superpowers;
        }
    }
    exports.default = Hero;
});
define("app", ["require", "exports", "hero"], function (require, exports, hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const batman = new hero_1.default("batman");
    batman.age = 33;
    batman.addPower("money");
    batman.addPower("batarang");
    console.log(batman.listPowers());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vaXBlcnNvbi50cyIsIi4uL2Fic3RyYWN0LWh1bWFuLnRzIiwiLi4vaWhlcm8udHMiLCIuLi9wZXJzb24udHMiLCIuLi9oZXJvLnRzIiwiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUNDQTtRQUdFLFlBQVksSUFBWTtZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO0tBRUY7SUFQRCx3QkFPQzs7Ozs7Ozs7O0lFUEQsWUFBNEIsU0FBUSx3QkFBSztRQUN2QyxZQUFZLElBQVk7WUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNNLE9BQU87WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNsQixDQUFDO0tBQ0Y7SUFQRCx5QkFPQzs7Ozs7SUNORCxVQUEwQixTQUFRLGdCQUFNO1FBRXRDLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFGUCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUdsQyxDQUFDO1FBQ00sUUFBUSxDQUFDLEtBQWE7WUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNNLFVBQVU7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO0tBQ0Y7SUFYRCx1QkFXQzs7Ozs7SUNYRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJUGVyc29uIHtcbiAgbmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbn1cbiIsImltcG9ydCBJUGVyc29uIGZyb20gXCIuL2lwZXJzb25cIjtcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEh1bWFuIGltcGxlbWVudHMgSVBlcnNvbiB7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBhZ2U6IG51bWJlcjtcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBwdWJsaWMgYWJzdHJhY3Qgc2hvd0FnZSgpOiBudW1iZXI7XG59XG4iLCJpbXBvcnQgSVBlcnNvbiBmcm9tIFwiLi9pcGVyc29uXCI7XG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSUhlcm8gZXh0ZW5kcyBJUGVyc29uIHtcbiAgc3VwZXJwb3dlcnM6IHN0cmluZ1tdO1xufVxuIiwiaW1wb3J0IEh1bWFuIGZyb20gXCIuL2Fic3RyYWN0LWh1bWFuXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24gZXh0ZW5kcyBIdW1hbiB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG4gIHB1YmxpYyBzaG93QWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWdlO1xuICB9XG59XG4iLCJpbXBvcnQgSUhlcm8gZnJvbSBcIi4vaWhlcm9cIjtcbmltcG9ydCBQZXJzb24gZnJvbSBcIi4vcGVyc29uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgUGVyc29uIGltcGxlbWVudHMgSUhlcm8ge1xuICBwdWJsaWMgc3VwZXJwb3dlcnM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKG5hbWUpO1xuICB9XG4gIHB1YmxpYyBhZGRQb3dlcihwb3dlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdXBlcnBvd2Vycy5wdXNoKHBvd2VyKTtcbiAgfVxuICBwdWJsaWMgbGlzdFBvd2VycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJwb3dlcnM7XG4gIH1cbn1cbiIsImltcG9ydCBIZXJvIGZyb20gXCIuL2hlcm9cIjtcblxuY29uc3QgYmF0bWFuID0gbmV3IEhlcm8oXCJiYXRtYW5cIik7XG5iYXRtYW4uYWdlID0gMzM7XG5iYXRtYW4uYWRkUG93ZXIoXCJtb25leVwiKTtcbmJhdG1hbi5hZGRQb3dlcihcImJhdGFyYW5nXCIpO1xuXG5jb25zb2xlLmxvZyhiYXRtYW4ubGlzdFBvd2VycygpKTtcbiJdfQ==