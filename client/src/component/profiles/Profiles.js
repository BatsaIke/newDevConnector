import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spinner } from "../layout/Spinner.js";
import { getProfiles } from "../../actions/profileActions.js";
import ProfileItem from "./ProfileItem.js";

const Profiles = ({getProfiles, profile:{profiles, loading}}) => {

    useEffect(()=>{
        getProfiles();
    },[getProfiles])

  return <>
  {loading? (<Spinner/>):(<>
  <h1 className="large text-primary">Developers</h1>
  <p className="lead">
    <i className="fab fa-connectdevelop">Browse and connect with developers</i>
  </p>
  <div className="profiles">
    {profiles.length>0? (
        profiles.map(profile=>(
            <ProfileItem key ={profile._id} profile={profile} />
        ))
    ):(loading&& <h4> no profiles found</h4>)}
  </div>
  </>)}
  </>;
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps=(state)=>({
profile: state.profile
})

export default connect(mapStateToProps,{getProfiles}) (Profiles);
