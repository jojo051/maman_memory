import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import {createChildren} from "../graphql/mutations";
import {listChildren} from "../graphql/queries";

const TestAppelApi=()=> {
  const [childrens, setChildrens]=useState<Array<string>>([]);

    async function fetchChildrens() {
      try {
        const childrensData : any = await API.graphql(graphqlOperation(listChildren))
        const childrens : any = childrensData.data.listChildren.items
        setChildrens( childrens )
      } catch (err) { console.log('error fetching childrens',err) }
    };
    
    useEffect(()=>{
      fetchChildrens();
      console.log("jetourne");
    },[]);

    return(

  <div>
  {childrens.map<any>((children:any ,index:any) => <li key={index}>{children.name}</li>)}
  </div>
  )
}
export default TestAppelApi;