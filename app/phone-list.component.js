angular.
    module('phonecatApp').
    component('phoneList', {
        template:
            '<ul>' + 
                '<li ng-repeat="phone in $ctrl.phones">' + 
                    '<span>{{phone.name}}</span>' +
                    '<p>{{phone.snippet}}</p>' +
                    '<p>Welcome message from {{phone.name}}: Hello {{phone.mes}}</p>' + 
                '</li>' +
                '<li>' +
                    '<span>Number of records in list of phones: {{$ctrl.phones.length}}</span>' +
                '</li>' +
            '</ul>',
        controller: function PhoneListController(){
            this.phones = [
                {
                  name: 'Nexus S',
                  snippet: 'Fast just got faster with Nexus S.',
                  mes: ', people!'
                }, {
                  name: 'Motorola XOOM™ with Wi-Fi',
                  snippet: 'The Next, Next Generation tablet.',
                  mes: '. And nothing more.'
                }, {
                  name: 'Nokia Lumia',
                  snippet: 'The Next, Next Generation tablet.',
                  mes: 'all. Nokia - connecting people'
                }, {
                  name: 'Nokia 3310',
                  snippet: 'Perfect instrument for breaking briks and nailing',
                  mes: 'all. Nokia - connecting all in your house =)'
                }
            ];
    }
});