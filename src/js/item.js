(function(exports) {

    var idCounter = 0;

    var Item = function(item, completed) {
        this.text = item;
        this.completed = completed === true ? true : false;
        this.id = idCounter++;
    };

    Item.prototype.get = function() {
        return this.text;
    };

    Item.prototype.status = function() {
        return this.completed;
    };

    Item.prototype.changeStatus = function() {
        return this.completed = !this.completed;
    };

    exports.Item = Item;

})(this);
