import { useFirestore } from 'vuefire'
import {
    collection,
    doc,
    runTransaction,
} from "firebase/firestore";
import _ from 'lodash';
import moment from 'moment'
import { getAuth } from 'firebase/auth';

export const setdatabaseinv = async (id_project: string, data: any) => {
    const db = useFirestore();
    const auth = getAuth()
    const email = auth.currentUser!.email
    const now = moment().unix()
    return await runTransaction(db, async transaction => {
        const nomorInvRef = doc(db, 'penomoran', 'nomor') // baku nomor ref 
        const getnomor = await transaction.get(nomorInvRef)
        const datanomor = getnomor.data()
        const newnumber = datanomor!.no_inv + 1
        const stringnewnumber = _.toString(newnumber) // 3
        const padnumber = stringnewnumber.padStart(2, "0"); // 03
        const bulan = moment().format("M") // 7
        const getromawi = await romawian(_.toNumber(bulan)) // 7 jadi VII
        const year = moment().format("YYYY") // 2024
        const no_inv = "FI-" + padnumber + '/PT-TAP/' + getromawi + '/' + year // FI-03/PT-TAP/VII/2024
        const id_inv = "FI-" + padnumber + '-PT-TAP-' + getromawi + '-' + year // FI-03/PT-TAP/VII/2024
        const setdata = _.assign({ no_inv, updateBy: email, updatedAt: now }, data)
        const projectRef = doc(db, 'm_project', id_project)
        const m_invprojectRef = doc(db, 'm_invproject', id_inv)
        const projectInvRef = doc(db, 'm_project', id_project, 'm_invproject', id_inv)
        const getprojectdata = await transaction.get(projectRef)

        if (!getprojectdata.exists()) {
            throw "Document does not exist!";
        }
        const projectdata = getprojectdata.data()
        const totaldone = projectdata.total_done
        const newtotaldone = totaldone + data.nilai_billing
        const dataupdateproject = {
            total_done: newtotaldone,
            updateBy: email, updatedAt: now
        }
        transaction.update(nomorInvRef, { no_inv: newnumber })
        transaction.set(m_invprojectRef, setdata)
        transaction.set(projectInvRef, setdata)
        return transaction.update(projectRef, dataupdateproject)
    }).then(() => {
        return "ok"
    }).catch((error) => {
        return error.message
    })
};

export const setpopembelian = async (data: any) => {
    const db = useFirestore();
    const auth = getAuth()
    const email = auth.currentUser!.email
    const now = moment().unix()
    return await runTransaction(db, async transaction => {
        const nomorInvRef = doc(db, 'penomoran', 'nomor') // baku nomor ref 
        const getnomor = await transaction.get(nomorInvRef)
        const datanomor = getnomor.data()
        const newnumber = datanomor!.no_popembelian + 1
        const stringnewnumber = _.toString(newnumber) // 3
        const padnumber = stringnewnumber.padStart(2, "0"); // 03
        const bulan = moment().format("M") // 7
        const getromawi = await romawian(_.toNumber(bulan)) // 7 jadi VII
        const year = moment().format("YYYY") // 2024
        const no_popembelian = "PO-" + padnumber + '/PT-TAP/' + getromawi + '/' + year // FI-03/PT-TAP/VII/2024
        const id_pembelian = "PO-" + padnumber + '-PT-TAP-' + getromawi + '-' + year // FI-03/PT-TAP/VII/2024
        const setdata = _.assign({ no_popembelian, updateBy: email, updatedAt: now }, data)
        const pembelianRef = doc(db, 'po_pembelian', id_pembelian)
        transaction.update(nomorInvRef, { no_popembelian: newnumber })
        return transaction.set(pembelianRef, setdata)
    }).then(() => {
        return "ok"
    }).catch((error) => {
        return error.message
    })
};


export const getdatabaseinvproject = async (id_project: string) => {
    const db = useFirestore();
    // /m_project/FI-05-PT-TAP-VII-2024/m_invproject
    const colRef = useCollection(collection(db, 'm_project', id_project, 'm_invproject'));
    return colRef;

}
