// Türü veri şekliyle aynı şekilde güncelleyin.
// type List = unknown;

// List bir interface olsun
interface List {
    id : string,
    name:string,
    books:Array<Book>
}
interface Book {
    id?:string,
    name?:string
}



export default function move(list: Array<List>, source: string, destination: string): Array<List> {
    let ilkRafinKitaplari: Array<Book>;
    let ilkRafinIndexi: number = 0;
    let aktarilacakOlanKitap: Book = {}, aktarilacakOlanKitabinIndexi: number = 0;
    let rafIdleri:Array<string>=[] // raf id lerini tuttuğum array
    list.forEach((raf, rafIndex) => {
        rafIdleri.push(list[rafIndex].id)
        raf.books.find((kitap, kitapIndex) => {
            if (kitap.id == source) {
                aktarilacakOlanKitap = kitap
                aktarilacakOlanKitabinIndexi = kitapIndex
                ilkRafinIndexi = rafIndex
            }
        })

    })
    if (rafIdleri.includes(source)){
        throw new Error('Bir rafı taşıyamazsınız')
    }else
    {
        // console.log('kaynak bir kitaptır')
        //
        // console.log('raf id leri =' ,rafIdleri)
        // console.log('kitap id leri =  ',kitapIdleri)

        ilkRafinKitaplari = list[ilkRafinIndexi].books

        // ilk rafın kitaplarından seçilen kitabın silinmesi işlemi
        ilkRafinKitaplari.splice(aktarilacakOlanKitabinIndexi, 1)
        console.log('ilk rafin kitaplarından aktarılacak kitap silindi mi = ', ilkRafinKitaplari)
        // ilk rafın kitaplarından seçilen kitabın silinmesi işlemi

        const destinationFindIndex = (element: any) => element.id == destination
        const destinationIndex = list.findIndex(destinationFindIndex)
        // console.log('destination indexi bul ve yazdır => ', list.findIndex(destinationFindIndex))

        if (destinationIndex == -1) {
            console.log('destination index -1');
            throw new Error('Hedef olarak bir kitap belirtemezsiniz');
        } else {

            list[destinationIndex].books.push(aktarilacakOlanKitap)
            console.log('destination index -1 değil')
            console.log('listenin son hali === ', list)
            return list
        }


    }
}
