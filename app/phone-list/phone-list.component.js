angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function PhoneListController(){
            this.phones = [
                {
                  name: 'Nexus S',
                  snippet: 'Fast just got faster with Nexus S.',
                  mes: ', people!',
                  age: 4
                }, {
                  name: 'Motorola XOOM™ with Wi-Fi',
                  snippet: 'The Next, Next Generation tablet.',
                  mes: '. And nothing more.',
                  age: 2
                }, {
                  name: 'Nokia Lumia',
                  snippet: 'The Next, Next Generation tablet.',
                  mes: 'all. Nokia - connecting people',
                  age: 3
                }, {
                  name: 'Nokia 3310',
                  snippet: 'Perfect instrument for breaking briks and nailing',
                  mes: 'all. Nokia - connecting all in your house =)',
                  age: 1
                }
            ];
            
        this.orderProp = 'age';
    }
});