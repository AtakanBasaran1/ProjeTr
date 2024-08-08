import React from 'react'

function HomeSide() {
    return (
        <div>
            <div style={{ marginLeft: '13px' }}>
                <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginLeft: '320px', marginTop: '15px', color: 'black' }}>Offers</h1>

                <button style={{ border: '1px solid black', marginLeft: '412px', width: '48px', borderRadius: '30px', backgroundColor: 'black', color: 'white', fontWeight: '200', height: '32px', marginTop: '-32px', position: 'fixed' }}>All</button>

                <button style={{ border: '1px solid lightgray', marginLeft: '470px', width: '90px', borderRadius: '30px', color: 'black', fontWeight: '600', height: '32px', marginTop: '-32px', position: 'fixed' }}>Pending</button>

                <button style={{ border: '1px solid lightgray', marginLeft: '570px', width: '90px', borderRadius: '30px', color: 'black', fontWeight: '600', height: '32px', marginTop: '-32px', position: 'fixed' }}>Revised</button>

                <button style={{ border: '1px solid lightgray', marginLeft: '670px', width: '70px', borderRadius: '30px', color: 'black', fontWeight: '600', height: '32px', marginTop: '-32px', position: 'fixed' }}>Paid</button>

                <button style={{ border: '1px solid lightgray', marginLeft: '750px', width: '95px', borderRadius: '30px', color: 'black', fontWeight: '600', height: '32px', marginTop: '-32px', position: 'fixed' }}>Rejected</button>
            </div>
            <div><hr style={{ width: '1170px', position: 'relative', left: '330px', top: '15px' }} /></div>
            <div>
                <input style={{ marginLeft: '330px', marginTop: '50px', border: '1px solid lightgray', borderRadius: '20px', width: '1170px', height: '37px' }} type="text" placeholder='         Search by material, color or product name'
                />
                <svg
                    style={{ marginLeft: '340px', marginTop: '-30px', color: 'gray', height: '25px' }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
            <div style={{ marginTop: '-30px' }}>
                <svg
                    style={{ position: 'relative', left: '850px', fontSize: '45px', width: '100px', height: '100px', top: '150px', color: 'lightgray' }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
                <p
                    style={{ maxWidth: '280px', textAlign: 'center', position: 'relative', marginLeft: '770px', top: '160px', color: 'lightgray' }}
                >No products added yet. After adding your products, you can send and offer request.</p>

                <div>
                    <button style={{ marginLeft: '840px', marginTop: '180px', border: '1px solid ', backgroundColor: 'black', color: 'white', fontWeight: '250', width: '140px', borderRadius: '20px', height: '38px', fontSize: '15px' }}>+ Add Product</button>
                </div>
            </div>
        </div >
    )
}

export default HomeSide