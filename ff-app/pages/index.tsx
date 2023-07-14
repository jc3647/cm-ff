import  React  from 'react';
import Header from '../src/app/components/header';
import Link from 'next/link';


const App: React.FC = () => {

  return (
    <div>
      <Header name="John" />;
        <Link href="/jeff">
          <button style={{ textDecoration: 'underline', cursor: 'pointer' }}>
            Go to Testing Page
          </button>
        </Link>
    </div>

  );
};

export default App;