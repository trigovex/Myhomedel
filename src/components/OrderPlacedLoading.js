import React,{useEffect,useState} from 'react'
import sound from '../assets/Completed.wav';

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";
import Lodi from '../lotties/placed.json'
import { RemoveAll } from './../screens/redux/actions';
import { connect } from 'react-redux';

function OrderPlacedLoading(props) {
    const {local_variable,RemoveAll} =props;
    let navigate = useNavigate();
    useEffect(() => {

        const timer = setTimeout(() => {




            RemoveAll()
            new Audio(sound).play();

          navigate('/PresentOrders');
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}> 
               <div  >


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '490px', width: '490px' }}
                >
                   
                </Player>

                 
               </div>

</div>
    </>
  )
}

const mapStateToProps = state =>({
    local_variable :state.item
  })

export default connect(mapStateToProps,{RemoveAll})(OrderPlacedLoading);