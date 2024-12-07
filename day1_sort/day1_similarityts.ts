const rawData = [
    [	17113	,	23229	]	,
    [	55260	,	78804	]	,
    [	92726	,	24891	]	,
    [	79691	,	90526	]	,
    [	97979	,	99871	]	,
    [	28198	,	44110	]	,
    [	33527	,	52030	]	,
    [	22794	,	55253	]	,
    [	54386	,	67440	]	,
    [	28290	,	47430	]	,
    [	72856	,	96191	]	,
    [	81386	,	33514	]	,
    [	98181	,	68533	]	,
    [	17398	,	21683	]	,
    [	20326	,	98429	]	,
    [	43166	,	93579	]	,
    [	52439	,	70188	]	,
    [	53255	,	78804	]	,
    [	44259	,	74528	]	,
    [	92407	,	49689	]	,
    [	81207	,	81964	]	,
    [	45060	,	78804	]	,
    [	17144	,	42906	]	,
    [	42014	,	22912	]	,
    [	87580	,	74797	]	,
    [	18771	,	79006	]	,
    [	19437	,	33718	]	,
    [	53851	,	59298	]	,
    [	98207	,	31436	]	,
    [	36084	,	70810	]	,
    [	47638	,	64100	]	,
    [	63813	,	64256	]	,
    [	66589	,	96811	]	,
    [	47882	,	23287	]	,
    [	73077	,	42906	]	,
    [	69312	,	97079	]	,
    [	59952	,	80142	]	,
    [	71570	,	88283	]	,
    [	11028	,	71176	]	,
    [	10205	,	49983	]	,
    [	63022	,	72653	]	,
    [	74396	,	22834	]	,
    [	53209	,	26046	]	,
    [	16122	,	29328	]	,
    [	86391	,	13321	]	,
    [	39959	,	96494	]	,
    [	48754	,	71974	]	,
    [	30100	,	18048	]	,
    [	41051	,	27354	]	,
    [	61072	,	75304	]	,
    [	39493	,	88283	]	,
    [	87729	,	31850	]	,
    [	98733	,	70379	]	,
    [	59455	,	20268	]	,
    [	26046	,	83127	]	,
    [	45020	,	31850	]	,
    [	14486	,	70611	]	,
    [	56582	,	72113	]	,
    [	98429	,	32880	]	,
    [	24976	,	61043	]	,
    [	75079	,	59298	]	,
    [	42852	,	26775	]	,
    [	32354	,	44934	]	,
    [	43039	,	31328	]	,
    [	71406	,	85342	]	,
    [	19671	,	62154	]	,
    [	80427	,	61907	]	,
    [	46509	,	49624	]	,
    [	52983	,	57820	]	,
    [	52973	,	93107	]	,
    [	57013	,	85777	]	,
    [	15790	,	87358	]	,
    [	90076	,	59298	]	,
    [	25962	,	64256	]	,
    [	55074	,	93673	]	,
    [	57179	,	96811	]	,
    [	40841	,	27328	]	,
    [	45699	,	88283	]	,
    [	96749	,	15577	]	,
    [	47064	,	11294	]	,
    [	43467	,	59973	]	,
    [	79006	,	46538	]	,
    [	64100	,	92439	]	,
    [	20638	,	92043	]	,
    [	83036	,	15078	]	,
    [	75308	,	37789	]	,
    [	24011	,	96811	]	,
    [	28731	,	64100	]	,
    [	82030	,	98429	]	,
    [	51086	,	77849	]	,
    [	15528	,	74498	]	,
    [	75818	,	55253	]	,
    [	52966	,	26782	]	,
    [	54065	,	85446	]	,
    [	94632	,	98429	]	,
    [	71345	,	96659	]	,
    [	21237	,	90494	]	,
    [	62133	,	26040	]	,
    [	27566	,	69167	]	,
    [	26630	,	63361	]	,
    [	38345	,	78564	]	,
    [	23417	,	36059	]	,
    [	90631	,	71570	]	,
    [	82476	,	80062	]	,
    [	83859	,	75838	]	,
    [	74867	,	14965	]	,
    [	66862	,	96811	]	,
    [	34984	,	26526	]	,
    [	46711	,	78804	]	,
    [	92950	,	95788	]	,
    [	50682	,	55229	]	,
    [	16577	,	67662	]	,
    [	51100	,	29648	]	,
    [	85741	,	13916	]	,
    [	63501	,	42906	]	,
    [	69772	,	50682	]	,
    [	61831	,	66914	]	,
    [	68936	,	16393	]	,
    [	23439	,	72653	]	,
    [	66025	,	14757	]	,
    [	97886	,	73451	]	,
    [	34525	,	74021	]	,
    [	59890	,	70611	]	,
    [	25794	,	72282	]	,
    [	90658	,	53071	]	,
    [	15858	,	69320	]	,
    [	80166	,	74561	]	,
    [	77306	,	59298	]	,
    [	36279	,	51086	]	,
    [	23706	,	96811	]	,
    [	69097	,	61043	]	,
    [	39622	,	84847	]	,
    [	13945	,	60451	]	,
    [	73634	,	44370	]	,
    [	39506	,	79006	]	,
    [	72099	,	65904	]	,
    [	10711	,	79218	]	,
    [	72942	,	78804	]	,
    [	50126	,	85460	]	,
    [	42873	,	35570	]	,
    [	62173	,	23894	]	,
    [	96851	,	57820	]	,
    [	33994	,	98429	]	,
    [	15129	,	25067	]	,
    [	88205	,	17956	]	,
    [	47499	,	77657	]	,
    [	50872	,	95788	]	,
    [	36657	,	15370	]	,
    [	58577	,	46971	]	,
    [	28775	,	87189	]	,
    [	47436	,	42906	]	,
    [	74496	,	78804	]	,
    [	93457	,	78804	]	,
    [	26612	,	40354	]	,
    [	10996	,	59298	]	,
    [	62565	,	72653	]	,
    [	46311	,	70095	]	,
    [	27040	,	20573	]	,
    [	33619	,	34869	]	,
    [	74406	,	94188	]	,
    [	12022	,	84307	]	,
    [	15397	,	61173	]	,
    [	62696	,	18735	]	,
    [	89144	,	35419	]	,
    [	30786	,	71570	]	,
    [	12339	,	58492	]	,
    [	20172	,	88283	]	,
    [	65223	,	59925	]	,
    [	38793	,	56474	]	,
    [	83462	,	85446	]	,
    [	41320	,	24231	]	,
    [	97955	,	71388	]	,
    [	72939	,	96811	]	,
    [	87629	,	70087	]	,
    [	56201	,	95157	]	,
    [	81347	,	63375	]	,
    [	87491	,	78804	]	,
    [	32409	,	35765	]	,
    [	11899	,	98315	]	,
    [	90582	,	18711	]	,
    [	38166	,	96811	]	,
    [	41064	,	94388	]	,
    [	87339	,	31310	]	,
    [	74560	,	31690	]	,
    [	96849	,	50948	]	,
    [	45846	,	56819	]	,
    [	64668	,	23702	]	,
    [	73929	,	71570	]	,
    [	59305	,	47671	]	,
    [	72161	,	85446	]	,
    [	18851	,	42906	]	,
    [	47143	,	74339	]	,
    [	31142	,	36295	]	,
    [	83358	,	83372	]	,
    [	86726	,	26046	]	,
    [	20570	,	98429	]	,
    [	94849	,	98429	]	,
    [	95888	,	64320	]	,
    [	44701	,	72113	]	,
    [	62859	,	34589	]	,
    [	64290	,	88625	]	,
    [	52371	,	98429	]	,
    [	88896	,	74339	]	,
    [	44664	,	98429	]	,
    [	46240	,	50211	]	,
    [	99654	,	70673	]	,
    [	29548	,	64100	]	,
    [	23117	,	50682	]	,
    [	67044	,	79006	]	,
    [	55532	,	70611	]	,
    [	57909	,	30161	]	,
    [	74797	,	64051	]	,
    [	24274	,	47311	]	,
    [	15645	,	94033	]	,
    [	54723	,	79006	]	,
    [	33329	,	72653	]	,
    [	20473	,	72576	]	,
    [	51889	,	96811	]	,
    [	75639	,	74917	]	,
    [	55282	,	14381	]	,
    [	35230	,	77500	]	,
    [	70611	,	64100	]	,
    [	55253	,	72113	]	,
    [	52367	,	57820	]	,
    [	81509	,	82227	]	,
    [	73775	,	71570	]	,
    [	40713	,	96565	]	,
    [	55493	,	20615	]	,
    [	30248	,	98429	]	,
    [	14139	,	75952	]	,
    [	61677	,	54698	]	,
    [	98776	,	74453	]	,
    [	11359	,	98987	]	,
    [	23419	,	25825	]	,
    [	61608	,	95642	]	,
    [	11700	,	50682	]	,
    [	88617	,	27540	]	,
    [	17154	,	40371	]	,
    [	51560	,	83091	]	,
    [	40348	,	26046	]	,
    [	10393	,	64100	]	,
    [	70105	,	71877	]	,
    [	36655	,	52994	]	,
    [	78804	,	94388	]	,
    [	15520	,	98429	]	,
    [	42007	,	50682	]	,
    [	94692	,	96811	]	,
    [	51332	,	31850	]	,
    [	47111	,	42906	]	,
    [	14566	,	27377	]	,
    [	45473	,	27113	]	,
    [	73774	,	24517	]	,
    [	52733	,	23322	]	,
    [	18675	,	98564	]	,
    [	95008	,	71570	]	,
    [	78497	,	65736	]	,
    [	52389	,	79006	]	,
    [	27248	,	63003	]	,
    [	84985	,	74015	]	,
    [	79069	,	92404	]	,
    [	61844	,	21552	]	,
    [	16699	,	53744	]	,
    [	65852	,	29202	]	,
    [	16704	,	71570	]	,
    [	42436	,	47345	]	,
    [	94631	,	59298	]	,
    [	13220	,	31956	]	,
    [	57368	,	99539	]	,
    [	54268	,	24876	]	,
    [	83050	,	57820	]	,
    [	84234	,	34967	]	,
    [	42906	,	31850	]	,
    [	85446	,	37715	]	,
    [	15057	,	38091	]	,
    [	76144	,	76437	]	,
    [	57612	,	78804	]	,
    [	49079	,	38146	]	,
    [	46775	,	88283	]	,
    [	14485	,	81565	]	,
    [	81217	,	95788	]	,
    [	96795	,	57820	]	,
    [	97778	,	27838	]	,
    [	86682	,	40348	]	,
    [	44594	,	22997	]	,
    [	66113	,	74339	]	,
    [	60070	,	70611	]	,
    [	24623	,	74797	]	,
    [	38947	,	59298	]	,
    [	65561	,	48445	]	,
    [	96811	,	85551	]	,
    [	10139	,	80475	]	,
    [	68714	,	99823	]	,
    [	60817	,	91822	]	,
    [	57820	,	20826	]	,
    [	62849	,	79859	]	,
    [	87852	,	75210	]	,
    [	80279	,	36984	]	,
    [	93990	,	64100	]	,
    [	93045	,	51086	]	,
    [	51003	,	80859	]	,
    [	54603	,	57820	]	,
    [	21216	,	86165	]	,
    [	93301	,	82788	]	,
    [	93210	,	62681	]	,
    [	67882	,	55284	]	,
    [	41519	,	72574	]	,
    [	81043	,	52030	]	,
    [	54207	,	78804	]	,
    [	68937	,	74874	]	,
    [	68413	,	59298	]	,
    [	73957	,	51067	]	,
    [	66167	,	40348	]	,
    [	91985	,	74245	]	,
    [	10523	,	19192	]	,
    [	11825	,	31850	]	,
    [	85668	,	93743	]	,
    [	88821	,	51086	]	,
    [	57039	,	23854	]	,
    [	45164	,	83875	]	,
    [	13476	,	71981	]	,
    [	77162	,	29504	]	,
    [	30938	,	64100	]	,
    [	13718	,	38472	]	,
    [	10486	,	35879	]	,
    [	78593	,	49315	]	,
    [	34561	,	19075	]	,
    [	67892	,	23183	]	,
    [	64635	,	94388	]	,
    [	21867	,	70673	]	,
    [	71436	,	32906	]	,
    [	31425	,	69383	]	,
    [	43317	,	85446	]	,
    [	18374	,	22112	]	,
    [	14765	,	31850	]	,
    [	64173	,	70611	]	,
    [	11486	,	87328	]	,
    [	92256	,	45322	]	,
    [	92494	,	27969	]	,
    [	71981	,	59298	]	,
    [	40701	,	50682	]	,
    [	50437	,	48043	]	,
    [	38167	,	38731	]	,
    [	90756	,	34381	]	,
    [	66182	,	11306	]	,
    [	34327	,	74339	]	,
    [	19787	,	80910	]	,
    [	29802	,	68457	]	,
    [	63265	,	52681	]	,
    [	46942	,	86530	]	,
    [	85458	,	64100	]	,
    [	26891	,	88283	]	,
    [	68508	,	24231	]	,
    [	95988	,	25420	]	,
    [	90320	,	55253	]	,
    [	18567	,	60822	]	,
    [	72768	,	18918	]	,
    [	33734	,	57882	]	,
    [	25771	,	57820	]	,
    [	62484	,	30068	]	,
    [	41897	,	81919	]	,
    [	44909	,	27222	]	,
    [	69758	,	96811	]	,
    [	63905	,	95788	]	,
    [	22166	,	71220	]	,
    [	96433	,	42918	]	,
    [	90290	,	96811	]	,
    [	11123	,	70611	]	,
    [	65711	,	88574	]	,
    [	10348	,	24643	]	,
    [	82619	,	71443	]	,
    [	25887	,	59298	]	,
    [	29764	,	26004	]	,
    [	33668	,	52073	]	,
    [	25349	,	35511	]	,
    [	93516	,	75054	]	,
    [	61491	,	14595	]	,
    [	53961	,	52030	]	,
    [	65868	,	72392	]	,
    [	33240	,	74716	]	,
    [	11788	,	94388	]	,
    [	64537	,	22970	]	,
    [	87221	,	53882	]	,
    [	37347	,	50682	]	,
    [	90140	,	42179	]	,
    [	35810	,	58521	]	,
    [	41037	,	31791	]	,
    [	94815	,	96811	]	,
    [	59575	,	66912	]	,
    [	42556	,	25155	]	,
    [	33987	,	31098	]	,
    [	80894	,	78804	]	,
    [	66053	,	81565	]	,
    [	60922	,	62532	]	,
    [	49241	,	73994	]	,
    [	16861	,	94929	]	,
    [	86533	,	91297	]	,
    [	20077	,	40348	]	,
    [	15734	,	98495	]	,
    [	16723	,	33825	]	,
    [	86591	,	17352	]	,
    [	94388	,	93695	]	,
    [	93673	,	94388	]	,
    [	13315	,	21870	]	,
    [	40830	,	51935	]	,
    [	82991	,	13775	]	,
    [	47510	,	76355	]	,
    [	60367	,	44803	]	,
    [	42991	,	96811	]	,
    [	68133	,	97121	]	,
    [	12428	,	85446	]	,
    [	92458	,	59298	]	,
    [	23447	,	77362	]	,
    [	69386	,	55285	]	,
    [	87983	,	51820	]	,
    [	19536	,	45124	]	,
    [	61043	,	39158	]	,
    [	36359	,	40999	]	,
    [	54106	,	32977	]	,
    [	27770	,	50682	]	,
    [	97994	,	50513	]	,
    [	97139	,	71570	]	,
    [	59487	,	28066	]	,
    [	78513	,	54094	]	,
    [	15414	,	48255	]	,
    [	86953	,	72653	]	,
    [	38441	,	98429	]	,
    [	33679	,	48233	]	,
    [	60100	,	50682	]	,
    [	33907	,	34601	]	,
    [	10124	,	88283	]	,
    [	11220	,	93952	]	,
    [	15138	,	98429	]	,
    [	26274	,	99867	]	,
    [	36249	,	87426	]	,
    [	13627	,	26046	]	,
    [	36226	,	86751	]	,
    [	25154	,	37461	]	,
    [	41695	,	74797	]	,
    [	81565	,	70611	]	,
    [	32563	,	86070	]	,
    [	93404	,	50682	]	,
    [	96620	,	72496	]	,
    [	24973	,	31850	]	,
    [	19904	,	10910	]	,
    [	55206	,	49606	]	,
    [	93915	,	40163	]	,
    [	34934	,	95770	]	,
    [	10265	,	46648	]	,
    [	79354	,	71250	]	,
    [	85569	,	52999	]	,
    [	77297	,	36485	]	,
    [	90937	,	81617	]	,
    [	97132	,	64100	]	,
    [	96756	,	42906	]	,
    [	98381	,	51086	]	,
    [	61349	,	72697	]	,
    [	85328	,	49286	]	,
    [	52030	,	42713	]	,
    [	56714	,	81367	]	,
    [	93948	,	36187	]	,
    [	38301	,	53896	]	,
    [	47479	,	83419	]	,
    [	53684	,	79679	]	,
    [	53121	,	96811	]	,
    [	96478	,	74339	]	,
    [	74646	,	93673	]	,
    [	88470	,	18402	]	,
    [	45305	,	34790	]	,
    [	81551	,	98429	]	,
    [	41245	,	64100	]	,
    [	85932	,	26773	]	,
    [	86668	,	88659	]	,
    [	33628	,	88492	]	,
    [	32554	,	24203	]	,
    [	37025	,	20978	]	,
    [	91036	,	70673	]	,
    [	76587	,	61846	]	,
    [	62748	,	64100	]	,
    [	90639	,	34769	]	,
    [	91562	,	40057	]	,
    [	26461	,	91210	]	,
    [	72046	,	56098	]	,
    [	66695	,	94812	]	,
    [	36065	,	61043	]	,
    [	99518	,	72653	]	,
    [	83934	,	66788	]	,
    [	92811	,	65107	]	,
    [	91389	,	94388	]	,
    [	94675	,	52030	]	,
    [	59272	,	66960	]	,
    [	21199	,	38563	]	,
    [	88109	,	74797	]	,
    [	77145	,	50682	]	,
    [	48782	,	14125	]	,
    [	15012	,	31850	]	,
    [	20350	,	32442	]	,
    [	55440	,	96253	]	,
    [	97974	,	32093	]	,
    [	98551	,	89149	]	,
    [	92344	,	34435	]	,
    [	20717	,	19666	]	,
    [	64754	,	28738	]	,
    [	69981	,	28136	]	,
    [	52305	,	52030	]	,
    [	95067	,	61128	]	,
    [	63324	,	40701	]	,
    [	87751	,	77588	]	,
    [	51000	,	52030	]	,
    [	74532	,	26437	]	,
    [	65957	,	35681	]	,
    [	16811	,	33442	]	,
    [	23693	,	70375	]	,
    [	21802	,	20326	]	,
    [	93547	,	42906	]	,
    [	32481	,	24315	]	,
    [	68943	,	88283	]	,
    [	75697	,	26046	]	,
    [	17283	,	45376	]	,
    [	25159	,	30097	]	,
    [	52161	,	91481	]	,
    [	76541	,	92369	]	,
    [	51274	,	30715	]	,
    [	23416	,	20326	]	,
    [	23132	,	59298	]	,
    [	86677	,	84925	]	,
    [	80233	,	96656	]	,
    [	44474	,	84330	]	,
    [	30098	,	98429	]	,
    [	67164	,	31850	]	,
    [	91166	,	71981	]	,
    [	78854	,	72653	]	,
    [	90762	,	52030	]	,
    [	41492	,	72653	]	,
    [	28347	,	96811	]	,
    [	72812	,	78804	]	,
    [	72408	,	61326	]	,
    [	83897	,	38869	]	,
    [	85054	,	18018	]	,
    [	65758	,	71570	]	,
    [	13245	,	38815	]	,
    [	48161	,	55421	]	,
    [	58204	,	66788	]	,
    [	60617	,	42906	]	,
    [	10327	,	23944	]	,
    [	13964	,	42906	]	,
    [	41660	,	64187	]	,
    [	39627	,	95788	]	,
    [	59237	,	61587	]	,
    [	95549	,	21424	]	,
    [	98289	,	52030	]	,
    [	58433	,	89108	]	,
    [	18693	,	52077	]	,
    [	51457	,	96811	]	,
    [	65976	,	40711	]	,
    [	89417	,	83230	]	,
    [	22641	,	57413	]	,
    [	13529	,	70611	]	,
    [	88690	,	73009	]	,
    [	65879	,	94388	]	,
    [	20808	,	39722	]	,
    [	28788	,	24251	]	,
    [	44418	,	58443	]	,
    [	87158	,	64256	]	,
    [	79022	,	88283	]	,
    [	54446	,	72653	]	,
    [	26062	,	91265	]	,
    [	90640	,	10843	]	,
    [	23116	,	88283	]	,
    [	95292	,	11447	]	,
    [	19232	,	88283	]	,
    [	11116	,	78586	]	,
    [	43868	,	89893	]	,
    [	90539	,	59298	]	,
    [	75441	,	31850	]	,
    [	76692	,	52326	]	,
    [	48862	,	44061	]	,
    [	34930	,	31850	]	,
    [	50595	,	31850	]	,
    [	58670	,	85233	]	,
    [	53507	,	16440	]	,
    [	82107	,	10132	]	,
    [	75846	,	57547	]	,
    [	99835	,	67161	]	,
    [	56075	,	99694	]	,
    [	67296	,	64100	]	,
    [	64256	,	11103	]	,
    [	91056	,	78804	]	,
    [	28021	,	47329	]	,
    [	11379	,	96811	]	,
    [	81085	,	47612	]	,
    [	31336	,	57820	]	,
    [	17779	,	96572	]	,
    [	88057	,	47613	]	,
    [	47972	,	60086	]	,
    [	61344	,	20741	]	,
    [	43231	,	64184	]	,
    [	67779	,	62191	]	,
    [	49640	,	89260	]	,
    [	10835	,	37168	]	,
    [	97080	,	52030	]	,
    [	88903	,	11194	]	,
    [	62011	,	26365	]	,
    [	24971	,	67832	]	,
    [	80793	,	99363	]	,
    [	45123	,	35187	]	,
    [	31966	,	44533	]	,
    [	74528	,	40348	]	,
    [	74601	,	17051	]	,
    [	88853	,	71570	]	,
    [	45209	,	41925	]	,
    [	71343	,	93083	]	,
    [	34456	,	20451	]	,
    [	33827	,	39511	]	,
    [	98152	,	94480	]	,
    [	47431	,	87694	]	,
    [	38458	,	85104	]	,
    [	27159	,	75853	]	,
    [	91443	,	78075	]	,
    [	96552	,	64100	]	,
    [	75660	,	81565	]	,
    [	42836	,	32719	]	,
    [	54697	,	59298	]	,
    [	58472	,	86075	]	,
    [	40825	,	34181	]	,
    [	28861	,	42906	]	,
    [	10358	,	68420	]	,
    [	80732	,	11766	]	,
    [	80150	,	53732	]	,
    [	11958	,	75643	]	,
    [	17301	,	72653	]	,
    [	15279	,	59298	]	,
    [	34102	,	65277	]	,
    [	72633	,	76714	]	,
    [	71810	,	51086	]	,
    [	11156	,	71570	]	,
    [	48131	,	88413	]	,
    [	73249	,	96811	]	,
    [	76299	,	35234	]	,
    [	87833	,	54202	]	,
    [	51068	,	76152	]	,
    [	51618	,	52030	]	,
    [	40827	,	24126	]	,
    [	39214	,	74797	]	,
    [	12413	,	24231	]	,
    [	80696	,	24253	]	,
    [	86927	,	53048	]	,
    [	20911	,	58521	]	,
    [	79954	,	91697	]	,
    [	75654	,	72653	]	,
    [	83677	,	56434	]	,
    [	82291	,	86048	]	,
    [	92409	,	72653	]	,
    [	84096	,	50682	]	,
    [	82397	,	48070	]	,
    [	42879	,	71570	]	,
    [	86705	,	70534	]	,
    [	59170	,	21958	]	,
    [	66482	,	26046	]	,
    [	91136	,	91398	]	,
    [	23650	,	27728	]	,
    [	99493	,	34344	]	,
    [	21956	,	26046	]	,
    [	13197	,	53502	]	,
    [	25952	,	74281	]	,
    [	36758	,	31850	]	,
    [	28902	,	61333	]	,
    [	88284	,	43229	]	,
    [	98539	,	50407	]	,
    [	50311	,	94388	]	,
    [	85893	,	98429	]	,
    [	71747	,	12547	]	,
    [	59298	,	16936	]	,
    [	75456	,	27595	]	,
    [	52597	,	93673	]	,
    [	85501	,	33154	]	,
    [	13322	,	42980	]	,
    [	41766	,	80539	]	,
    [	76709	,	94718	]	,
    [	46677	,	51224	]	,
    [	34272	,	34471	]	,
    [	49668	,	33250	]	,
    [	18142	,	57823	]	,
    [	66483	,	42995	]	,
    [	99423	,	61131	]	,
    [	29355	,	57820	]	,
    [	49611	,	32391	]	,
    [	10681	,	79504	]	,
    [	92288	,	40877	]	,
    [	21485	,	80560	]	,
    [	47844	,	10970	]	,
    [	41566	,	20326	]	,
    [	73942	,	56745	]	,
    [	95716	,	30859	]	,
    [	11417	,	88283	]	,
    [	39901	,	27962	]	,
    [	48515	,	72653	]	,
    [	92854	,	95788	]	,
    [	83788	,	14482	]	,
    [	85809	,	42906	]	,
    [	83369	,	46409	]	,
    [	67216	,	11280	]	,
    [	63187	,	72653	]	,
    [	40836	,	42906	]	,
    [	48169	,	70747	]	,
    [	93475	,	61043	]	,
    [	95539	,	19674	]	,
    [	79772	,	18492	]	,
    [	85336	,	96701	]	,
    [	27052	,	26961	]	,
    [	19908	,	53479	]	,
    [	32169	,	48038	]	,
    [	77703	,	70611	]	,
    [	98416	,	42906	]	,
    [	79603	,	45260	]	,
    [	22158	,	24520	]	,
    [	43444	,	21432	]	,
    [	16784	,	51094	]	,
    [	80373	,	18684	]	,
    [	29615	,	19779	]	,
    [	56706	,	78629	]	,
    [	78999	,	73960	]	,
    [	69792	,	16059	]	,
    [	50574	,	88731	]	,
    [	43085	,	48822	]	,
    [	40424	,	70669	]	,
    [	40659	,	70673	]	,
    [	60951	,	50682	]	,
    [	41601	,	51086	]	,
    [	81592	,	94388	]	,
    [	42681	,	76889	]	,
    [	87581	,	65868	]	,
    [	40459	,	95788	]	,
    [	17969	,	95255	]	,
    [	63595	,	64963	]	,
    [	74221	,	96707	]	,
    [	28922	,	42906	]	,
    [	46071	,	31649	]	,
    [	42637	,	14131	]	,
    [	63288	,	51472	]	,
    [	97600	,	70673	]	,
    [	72959	,	81565	]	,
    [	47142	,	30591	]	,
    [	32530	,	80283	]	,
    [	47758	,	56746	]	,
    [	85217	,	55253	]	,
    [	40682	,	79009	]	,
    [	72653	,	18941	]	,
    [	94919	,	71570	]	,
    [	90029	,	74951	]	,
    [	81036	,	50682	]	,
    [	17904	,	78804	]	,
    [	15101	,	71981	]	,
    [	26769	,	63627	]	,
    [	78892	,	50682	]	,
    [	95883	,	95788	]	,
    [	45661	,	55253	]	,
    [	11689	,	25718	]	,
    [	98567	,	71889	]	,
    [	15971	,	11729	]	,
    [	23868	,	99762	]	,
    [	33359	,	17733	]	,
    [	40012	,	85446	]	,
    [	58662	,	82121	]	,
    [	46377	,	50682	]	,
    [	98838	,	13274	]	,
    [	61061	,	55585	]	,
    [	94085	,	65381	]	,
    [	55691	,	31438	]	,
    [	98482	,	57820	]	,
    [	91548	,	28789	]	,
    [	49386	,	53382	]	,
    [	56553	,	52030	]	,
    [	28575	,	44903	]	,
    [	98113	,	60486	]	,
    [	27515	,	52030	]	,
    [	42472	,	40366	]	,
    [	36329	,	12658	]	,
    [	99313	,	88283	]	,
    [	54905	,	14798	]	,
    [	44030	,	98429	]	,
    [	73520	,	97320	]	,
    [	61505	,	30200	]	,
    [	32325	,	76047	]	,
    [	13604	,	24231	]	,
    [	98622	,	35732	]	,
    [	41298	,	41486	]	,
    [	88802	,	58191	]	,
    [	20423	,	26046	]	,
    [	37518	,	19787	]	,
    [	79067	,	91752	]	,
    [	36272	,	71502	]	,
    [	69856	,	52869	]	,
    [	85655	,	83333	]	,
    [	13412	,	21014	]	,
    [	66788	,	97244	]	,
    [	58189	,	79824	]	,
    [	42086	,	20326	]	,
    [	75726	,	74777	]	,
    [	37893	,	56588	]	,
    [	39283	,	61043	]	,
    [	95411	,	13244	]	,
    [	88657	,	79006	]	,
    [	37945	,	64814	]	,
    [	86146	,	35278	]	,
    [	87759	,	50682	]	,
    [	35055	,	88283	]	,
    [	37376	,	88377	]	,
    [	92315	,	29292	]	,
    [	17581	,	98429	]	,
    [	49321	,	55921	]	,
    [	97315	,	47331	]	,
    [	43297	,	93825	]	,
    [	84695	,	80805	]	,
    [	63922	,	96811	]	,
    [	50122	,	78365	]	,
    [	41396	,	69606	]	,
    [	77903	,	27637	]	,
    [	57282	,	22485	]	,
    [	84703	,	95788	]	,
    [	48942	,	69159	]	,
    [	56565	,	18261	]	,
    [	36812	,	17200	]	,
    [	88789	,	64926	]	,
    [	45642	,	42517	]	,
    [	63148	,	74493	]	,
    [	54947	,	25946	]	,
    [	74339	,	20725	]	,
    [	10397	,	31473	]	,
    [	19061	,	36904	]	,
    [	32245	,	25691	]	,
    [	18475	,	57808	]	,
    [	12780	,	91641	]	,
    [	54127	,	29122	]	,
    [	97341	,	63885	]	,
    [	46608	,	52030	]	,
    [	35994	,	51086	]	,
    [	96325	,	40477	]	,
    [	75194	,	59574	]	,
    [	34747	,	82983	]	,
    [	73974	,	42520	]	,
    [	39820	,	52030	]	,
    [	89442	,	51086	]	,
    [	43464	,	78804	]	,
    [	80188	,	83704	]	,
    [	16539	,	56792	]	,
    [	95788	,	30010	]	,
    [	27562	,	85446	]	,
    [	55974	,	25811	]	,
    [	64976	,	42906	]	,
    [	17911	,	31850	]	,
    [	49625	,	39754	]	,
    [	59333	,	26088	]	,
    [	61262	,	25480	]	,
    [	86710	,	31850	]	,
    [	50589	,	77141	]	,
    [	95614	,	52030	]	,
    [	23767	,	82669	]	,
    [	13983	,	32783	]	,
    [	55623	,	94388	]	,
    [	55673	,	52493	]	,
    [	40972	,	58178	]	,
    [	84655	,	23326	]	,
    [	32258	,	57820	]	,
    [	81841	,	72653	]	,
    [	27119	,	72653	]	,
    [	64466	,	38420	]	,
    [	82208	,	74254	]	,
    [	97984	,	45065	]	,
    [	94802	,	29150	]	,
    [	75481	,	64831	]	,
    [	24536	,	49169	]	,
    [	51773	,	23775	]	,
    [	59372	,	77788	]	,
    [	18923	,	46078	]	,
    [	88283	,	23745	]	,
    [	22820	,	51086	]	,
    [	79410	,	50682	]	,
    [	46925	,	94350	]	,
    [	26424	,	72113	]	,
    [	26457	,	52030	]	,
    [	38519	,	98125	]	,
    [	22397	,	42906	]	,
    [	10986	,	98705	]	,
    [	11783	,	11848	]	,
    [	61166	,	71570	]	,
    [	44915	,	65782	]	,
    [	60772	,	77169	]	,
    [	64272	,	57206	]	,
    [	62342	,	15208	]	,
    [	37677	,	15026	]	,
    [	24478	,	83868	]	,
    [	80585	,	42906	]	,
    [	36302	,	52043	]	,
    [	85630	,	71570	]	,
    [	29282	,	38594	]	,
    [	18294	,	59049	]	,
    [	47810	,	80251	]	,
    [	87777	,	17594	]	,
    [	36170	,	78804	]	,
    [	10332	,	59298	]	,
    [	92037	,	51086	]	,
    [	39743	,	79598	]	,
    [	24231	,	14834	]	,
    [	85100	,	26691	]	,
    [	16145	,	80328	]	,
    [	33807	,	24231	]	,
    [	54349	,	56810	]	,
    [	16488	,	48476	]	,
    [	71690	,	99852	]	,
    [	57119	,	42906	]	,
    [	13765	,	50067	]	,
    [	72515	,	62944	]	,
    [	81148	,	27356	]	,
    [	23757	,	65868	]	,
    [	13537	,	19185	]	,
    [	62084	,	57820	]	,
    [	34055	,	94293	]	,
    [	85617	,	52030	]	,
    [	70458	,	81565	]	,
    [	40529	,	66788	]	,
    [	43772	,	24231	]	,
    [	77818	,	96811	]	,
    [	60639	,	52030	]	,
    [	97001	,	94388	]	,
    [	54665	,	51320	]	,
    [	57968	,	98429	]	,
    [	56851	,	70611	]	,
    [	32614	,	61208	]	,
    [	53468	,	17942	]	,
    [	92837	,	99750	]	,
    [	68324	,	43638	]	,
    [	35832	,	17188	]	,
    [	17250	,	14295	]	,
    [	37188	,	70673	]	,
    [	10666	,	94388	]	,
    [	56749	,	64256	]	,
    [	86911	,	87480	]	,
    [	66675	,	43225	]	,
    [	39119	,	83042	]	,
    [	48026	,	20614	]	,
    [	81847	,	94819	]	,
    [	41594	,	60990	]	,
    [	94731	,	57274	]	,
    [	66701	,	85446	]	,
    [	85513	,	21776	]	,
    [	18880	,	36162	]	,
    [	54141	,	63061	]	,
    [	47560	,	31532	]	,
    [	19848	,	91990	]	,
    [	97554	,	33600	]	,
    [	24344	,	63021	]	,
    [	13553	,	88283	]	,
    [	72113	,	77649	]	,
    [	91672	,	59298	]	,
    [	31850	,	72653	]	,
    [	59206	,	20326	]	,
    [	95743	,	74339	]	,
    [	94493	,	28964	]	,
    [	67415	,	64100	]	,
    [	94195	,	71570	]	,
    [	56742	,	90541	]	,
    [	65316	,	59761	]	,
    [	23396	,	26046	]	,
    [	11406	,	58551	]	,
    [	74349	,	26046	]	,
    [	71377	,	60422	]	,
    [	77729	,	54781	]	,
    [	88023	,	78370	]	,
    [	17652	,	79006	]	,
    [	27233	,	53102	]	,
    [	60776	,	99834	]	,
    [	59784	,	78804	]	,
    [	54660	,	31850	]	,
    [	10994	,	27445	]	,
    [	46676	,	14719	]	,
    [	76436	,	74339	]	,
    [	70673	,	68390	]	,
    [	65192	,	70429	]	,
    [	66948	,	23099	]	,
    [	44572	,	88283	]	,
    [	40935	,	58761	]	,
    [	37124	,	94678	]	,
    [	57606	,	63291	]	,
    [	30461	,	74112	]	,
    [	64079	,	45380	]	,
    [	46535	,	51086	]	,
    [	58521	,	17069	]	,
    [	77559	,	24186	]	,
    [	73603	,	57820	]	,
    [	59649	,	52030	]	,
    [	12671	,	24231	]	,
    [	34305	,	36208	]	,
    [	12525	,	48556	]	,
    [	88852	,	10662	]	,
    [	48757	,	42906	]	,
    [	45044	,	81565	]	,
    [	52094	,	71011	]	,
    [	85075	,	62377	]	,
    [	45072	,	50682	]	,
    [	13192	,	61043	]	
]

const list1: number[] = []
const list2: number[] = []
rawData.forEach(element => {
    list1.push(element[0])
    list2.push(element[1])
});

console.log(list1)
console.log(list2)

let total: number = 0

list1.forEach((list1number) => {
    let matchedCount: number = 0
    list2.forEach(list2number => {
        if (list1number == list2number) {
            matchedCount++
        }
    });
    console.log(`${list1number} * ${matchedCount} = ${list1number * matchedCount}`)
    total += list1number * matchedCount
});

console.log("total =", total)
