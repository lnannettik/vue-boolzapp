// CHECH
console.log(`JS OK`);

const app = new Vue ({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'Clara',
                avatar: '_9',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Sto tutto fatto!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },  

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Io sono Pdor!',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Figlio di Kmer!',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Della trib?? di Istarr!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        activeIndex: 0,
        newMessageText: '',
        searchInput: '',
        answers: [
            "oh",
            "Prontoooo",
            "Ce la fai???",
            "Va beh ciao",
        ],

    },    

    methods: {

        // nuovo meassaggio risposta 1 sec

        addNewMessage() {
            if (this.newMessageText !== '') {
                this.contacts[this.activeIndex].messages.push(
                    {
                        date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                        text: this.newMessageText,
                        status: 'sent',
                    }
                );
                this.newMessageText = '';
                const randIndexAnswer =  Math.floor(Math.random() * (this.answers.length));
                setTimeout(() => {
                    this.contacts[this.activeIndex].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
                            text: this.answers[randIndexAnswer],
                            status: 'received',
                        }
                    );
                }, 1000)
            }
        },


        // filtro ricerca utenti

        filterContacts() {
            const searchInput = this.searchInput.toLowerCase();
            this.contacts.forEach(el => {
                if (!el.name.toLowerCase().includes(searchInput)) {
                    el.visible = false;
                } else {
                    el.visible = true
                }                
            })
        }
    }
})