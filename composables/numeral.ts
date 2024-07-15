import numeral from "numeral"
import moment from "moment"
numeral.register('locale', 'fr', {
   delimiters: {
       thousands: '.',
       decimal: ','
   },
   abbreviations: {
       thousand: 'k',
       million: 'm',
       billion: 'b',
       trillion: 't'
   },
   ordinal : function (number) {
       return number === 1 ? 'er' : 'ème';
   },
   currency: {
       symbol: '€'
   }
});
numeral.locale('fr')


export const rupiah =  (nominal: number) => {
   return numeral(nominal).format('0,0')
  }

export const rubahtanggalunix = (unix : number) =>{
   return moment.unix(unix).format('YYYY-MM-DD')
}

export const rubahtanggalunixjam = (unix : number) =>{
   return moment.unix(unix).format('DD-MM-YYYY HH:mm')
}
