
import{ hero,
  popularproducts,
  specialoffers,
  services,
 
  customerrevies,
  footer,
  subscribe,
  superquality} from './sections';
  import nav from './components/nav';
const App=()=>(
  <main className="relative"><nav />
  <section className="xl:padding-l wide:padding-r padding-b">
    <hero/></section>
   
    <section className="padding">popularproducts</section>
    <section className="padding">superqwuality</section>
    <section className="padding-x py-10">servises</section>
    <section className="padding">special offers</section>
    <section className="padding bg-pale-blue">customerreviews</section>
    <section className="padding-x  sm:py-32 py-16 w-full">subscribe</section>
    <section className="padding-x padding-t pb-8">footer</section>
    </main>

    
  
);
export default App;