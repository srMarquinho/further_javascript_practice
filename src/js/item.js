(function(exports) {

    var idCounter = 0;

    function Item(item, completed) {
        this.text = item;
        this.completed = completed === true ? true : false;
        this.id = idCounter++;
    }

    Item.prototype = {

        get: function() {
            return this.text;
        },

        status: function() {
            return this.completed;
        },

        changeStatus: function() {
            return this.completed = !this.completed;
        }
    };

    exports.Item = Item;

})(this);
