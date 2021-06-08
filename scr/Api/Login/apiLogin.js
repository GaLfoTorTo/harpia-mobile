import api from '../api';

const handleLogin = async (email, password) => {
    const loginHTTP = await api
        .post('logarApp', {
            email: email,
            password: password
        })
        .then(function(response){
            return response
        })
        .catch(function(error){
            return error
        });
    return loginHTTP
}

export default handleLogin;

//method controller 

/* public function logarApp(Request $request){
        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)){
            $authentication = Auth::user();
            return response()->json([$authentication]);
        }
    }
 */