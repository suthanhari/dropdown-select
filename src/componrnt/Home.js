import React from 'react'
import CreateSubCategory from './Create'
import Userlist from './Userlist'

function Home() {
    return (
        <>
            <div className="row">
                <div className='col-md-4'>
                    <CreateSubCategory />
                </div>
                <div className='col-md-8'>
                    <Userlist />
                </div>
            </div>

        </>
    )
}

export default Home