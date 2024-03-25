// Import React and necessary components from React Router and MDBReact
import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

// If Background component has props, define them in an interface
// import Background from "../components/common/Background"; // Normal JS import
import Background from '../components/common/Background'; // TypeScript assumes .tsx if you're in a TS project

// Home component as a Functional Component in TypeScript
const Home: React.FC = () => {
    return (
        <Background> {/* Assuming Background is properly typed for TypeScript */}
            <MDBContainer className="my-5 gradient-form">
                <div className="d-flex flex-column align-items-center">
                    <div className="text-center">
                        <img
                            src="../../public/maticas-tech-logo.svg"
                            style={{ width: '185px' }}
                            alt="Maticas Tech Logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">Welcome! Gonorreas</h4>
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                        <Link to="/login">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Already have an account? Log In</MDBBtn>
                        </Link>
                        <Link to="/signup">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2">Don't have an account? Sign Up</MDBBtn>
                        </Link>
                    </div>
                </div>
            </MDBContainer>
        </Background>
    );
};

export default Home;
