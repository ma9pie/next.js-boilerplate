import { useQuery } from "react-query";

const defaultProps = {
  queryKey: "",
  queryFn: () => {},
  staleTime: 120000,
  cacheTime: Infinity,
};
function UseQuery(props) {
  return useQuery({
    ...defaultProps,
    ...props,
  });
}

export default UseQuery;

` 
// react-query 작성 폼
const [state, setstate] = useState(initialState);
const queryKey = "apiUrl";
const query = useQuery({
  queryKey: queryKey,
  queryFn: () =>
    Rest.get(queryKey, {
      data: null,
    }).then((res) => {
      if (res.code === "0") {
        return res.data;
      }
    }),
});
useEffect(() => {
  if (query.data) {
    setState(query.data);
  }
}, [query.data]);
`;
