import React from 'react';

const loginSignUpSplit = {
    marginTop: '8px'
};

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">Lara-Post</a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link navbar-white" href="/">Home </a>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="dropdown-toggle nav-link navbar-white" data-toggle="dropdown" role="button" aria-expanded="false">
                        Profiles <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu">
                        <a href="/profiles"  className = 'dropdown-item navbar-white'>View Profiles</a>
                        {/* <a href="/profiles/following"  className = 'dropdown-item'>Profiles Following</a>
                        <div className="dropdown-divider"></div>
                        <a href="/profiles/me"  className = 'dropdown-item'>My Profile</a> */}
                    </div>
                    
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="dropdown-toggle nav-link navbar-white" data-toggle="dropdown" role="button" aria-expanded="false">
                        Posts <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu">
                        <a href="/posts/following"  className = 'dropdown-item'>Following Posts</a>
                        <a href="/posts"  className = 'dropdown-item'>All Posts</a>
                    </div>
                    
                </li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item row mx-auto">
                    <a className="nav-link navbar-white post-padding" href="#">Sign Up</a>
                    <span className = 'navbar-white post-padding' style = {loginSignUpSplit} >|</span>
                    <a className="nav-link navbar-white post-padding" href="#">Login</a>
                </li>
               
            </ul>
            {/* <div>
                <ul className="navbar-nav my-4 my-lg-0">
                    <li className = "nav-item in-line">
                        <div className = "row center">
                            
                            <a className="btn btn-link nav-link navbar-white center" href="/login" >Login</a>
                            <div style = {loginSignUpSplit} className='center'>|</div>
                            <a className="btn btn-link nav-link navbar-white center" href="/register">Sign Up</a>
                        </div>
                    </li>
                   
                     <li className="nav-item dropdown" style = 'margin-right:50px'>
                        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span className="caret"></span>
                        </a>
                        <div className="dropdown-menu">
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                            <a href="#" onclick = "$('#logout-form').submit()" className = 'dropdown-item'><i className="fa fa-btn fa-sign-out "></i>Logout</a>
                        </div>         
                    </li> 
                </ul>
            </div> */}
        </div>
    </nav>
  );
}

export default Navbar;
