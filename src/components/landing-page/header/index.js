import React from "react";
import {Container} from "./style";
import {Button, TextField} from "../../inputs";

export const Header = () => {
    return (
        <Container>
            <div className='form-container'>
                <h2 className='form-header'>Book home, hotels, and more on Airbnb</h2>
                <form>
                    <div className='form-input-wrapper'>
                        <label className='label' htmlFor=''>WHERE</label>
                        <TextField/>
                    </div>
                    <div className='d-flex form-input-wrapper'>
                        <div>
                            <label className='label' htmlFor=''>CHECK-IN</label>
                            <TextField/>
                        </div>
                        <div>
                            <label className='label' htmlFor=''>CHECK-OUT</label>
                            <TextField/>
                        </div>
                    </div>
                    <div className='d-flex form-input-wrapper'>
                        <div>
                            <label className='label' htmlFor=''>ADULTS</label>
                            <TextField/>
                        </div>
                        <div>
                            <label className='label' htmlFor=''>CHILDREN</label>
                            <TextField/>
                        </div>
                    </div>
                    <div className='form-input-wrapper'>
                        <Button/>
                    </div>
                </form>
                <div className='form-input-wrapper'>
                    <p>Earn up to $686/month hosting in Addis Ababa</p>
                </div>
            </div>
        </Container>
    )
};