import ChangePass from '@/Components/Auth/ChangePass';
import ConfirmOtp from '@/Components/Auth/ConfirmOtp';
import VerifyEmail from '@/Components/Auth/VerifyEmail';
import useAuth from '@/Hooks/useAuth';
import { useState } from 'react';

const ForgotPassword = () => {
  const { loading, setLoading } = useAuth();
  const [proceed, setProceed] = useState(false);
  const [resetPass, setResetPass] = useState(false);
  const [email, setEmail] = useState(null);
  const [info, setInfo] = useState(null);

  if (resetPass) {
    return <ChangePass info={info} />;
  }

  return (
    <>
      {!proceed ? (
        <VerifyEmail
          setProceed={setProceed}
          setEmail={setEmail}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <ConfirmOtp
          setInfo={setInfo}
          email={email}
          setResetPass={setResetPass}
        />
      )}
    </>
  );
};

export default ForgotPassword;
