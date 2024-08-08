import React from 'react'

function TopBar() {
    return (
        <div style={{ border: '1px solid lightgray' }}>
            <div style={{ borderRight: '1px solid lightgray', width: '200px', height: '59px', marginTop: '0px', marginLeft: '99px' }}>
                <div style={{ marginLeft: '-10px', }}>
                    <h1 style={{ fontSize: '19px', fontWeight: 'bold', color: 'lightskyblue', marginLeft: '35px', marginTop: '18px', position: 'fixed' }}>|Brand

                        <svg
                            style={{ position: 'fixed', marginLeft: '-25px', marginTop: '-25px', height: '25px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>


                    </h1>
                </div>
            </div>
            <div style={{ position: 'relative', top: '-4px' }}>

                <h1 style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '332px', marginTop: '-35px', position: 'fixed' }}>Dashboard</h1>
                <div style={{ marginLeft: '1190px', marginTop: '-45px', position: 'fixed' }} >

                    <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '110px', height: '35px', marginRight: '12px', marginLeft: '-40px', top: '-10px', position: 'relative' }}><p style={{ marginLeft: '20px', position: 'relative', top: '2px' }}>Settings</p>

                        <svg
                            style={{ marginTop: '-22px', marginLeft: '8px', height: '25px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </button>

                    <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '180px', height: '35px', marginRight: '12px', top: '-12px', position: 'relative' }}><p style={{ position: 'relative', top: '3px', left: '10px' }}>Change Producer</p>

                        <svg
                            style={{ marginTop: '-20px', marginLeft: '8px', height: '25px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>

                    </button>
                    <button style={{ fontSize: '15px', fontWeight: 'bold', border: '1px solid lightgray', borderRadius: '8px', width: '40px', height: '35px', position: 'relative', top: '1px' }}>
                        <svg
                            style={{ position: 'relative', left: '7px', height: '25px' }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>

                    </button>

                </div>
            </div>
        </div>
    )
}

export default TopBar