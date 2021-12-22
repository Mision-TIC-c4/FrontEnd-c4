import React, {useEffect} from 'react'
import ButtonLoading from 'components/ButtonLoading';
import { Link, useNavigate } from 'react-router-dom';
import useFormData from 'hooks/useFormData';
import { useMutation } from '@apollo/client';

import { useAuth } from 'context/authContext';

const InicioPag = () => {
    return (
        <div className='m-2'>
            Página de inicio
        </div>
    )
}

export default InicioPag
