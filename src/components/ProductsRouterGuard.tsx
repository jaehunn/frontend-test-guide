import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';

type Params = {
  id: string;
};

const schema = z.nan();

/** Slug 유효성 검사 컴포넌트 */
const ProductsRouterGuard = () => {
  const params = useParams<Params>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params?.id || schema.safeParse(Number(params.id)).success) {
      navigate(`/products`, {
        replace: true,
      });

      return;
    }
  }, [navigate, params?.id]);

  return <Outlet />;
};

export default ProductsRouterGuard;
