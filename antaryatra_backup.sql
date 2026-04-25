--
-- PostgreSQL database dump
--

\restrict gaeL7ASCTzUJBkbQILdGJM9h5VNN4hEThfzvB9xqw1zJSQ8AofnhXOoNx1U74FX

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Booking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Booking" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    goal text,
    level text,
    practice text,
    chakra text,
    notes text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Booking" OWNER TO postgres;

--
-- Name: Booking_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Booking_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Booking_id_seq" OWNER TO postgres;

--
-- Name: Booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Booking_id_seq" OWNED BY public."Booking".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookings (
    id integer NOT NULL,
    name text,
    email text,
    phone character varying(10),
    mode text,
    goal text,
    practices text[],
    notes text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.bookings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bookings_id_seq OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.bookings_id_seq OWNED BY public.bookings.id;


--
-- Name: Booking id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking" ALTER COLUMN id SET DEFAULT nextval('public."Booking_id_seq"'::regclass);


--
-- Name: bookings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings ALTER COLUMN id SET DEFAULT nextval('public.bookings_id_seq'::regclass);


--
-- Data for Name: Booking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Booking" (id, name, email, phone, goal, level, practice, chakra, notes, "createdAt") FROM stdin;
1	Moulshree Sahu	moulshreesahu243@gmail.com	8103050172	Anxiety	\N	\N	\N	\N	2026-03-06 05:32:14.087
2	Moulshree Sahu	moulshreesahu243@gmail.com	450303463	Anxiety	\N	\N	\N	\N	2026-03-06 09:01:22.887
3	Moulshree Sahu	moulshreesahu243@gmail.com	46823626	Anxiety	\N	\N	\N	\N	2026-03-06 09:03:54.488
4	Moulshree Sahu	moulshreesahu243@gmail.com		\N	\N	\N	\N	\N	2026-03-06 09:06:54.311
5				\N	\N	\N	\N	\N	2026-03-06 14:32:09.586
6	Moulshree Sahu	moulshreesahu243@gmail.com	8103052364	\N	\N	\N	\N	\N	2026-03-06 14:44:13.034
7				\N	\N	\N	\N	\N	2026-03-06 14:57:35.386
8	gxjsBJxa	sZHxbzkxnlZ@gmail	4626519	Better Sleep	\N	\N	\N	\N	2026-03-06 14:58:23.166
9	Moulshree Sahu	moulshreesahu243@gmail.com	8103052364	Anxiety	\N	\N	\N	\N	2026-03-06 17:14:50.008
10				\N	\N	\N	\N	\N	2026-03-06 17:40:06.341
11				\N	\N	\N	\N	\N	2026-03-07 03:03:54.612
12	Moulshree Sahu	moulshreesahu243@gmail.com	84135135	Anxiety	\N	\N	\N	\N	2026-03-07 05:10:36.679
13				\N	\N	\N	\N	\N	2026-03-07 05:43:05.548
14				\N	\N	\N	\N	\N	2026-03-07 05:49:44.922
15				\N	\N	\N	\N	\N	2026-03-07 05:54:15.68
16				\N	\N	\N	\N	\N	2026-03-07 06:03:54.488
17				\N	\N	\N	\N	\N	2026-03-10 13:34:00.048
18	Moulshree Sahu	moulshreesahu243@gmail.com	8103052364	Anxiety	\N	\N	\N	\N	2026-03-10 14:45:41.923
19	Moulshree Sahu	moulshreesahu243@gmail.com	2495736128	\N	\N	\N	\N	\N	2026-03-10 17:13:28.026
20	Moulshree Sahu	moulshreesahu243@gmail.com	8103052364	Stress Relief	\N	\N	\N	vxcvxcf	2026-03-10 17:15:37.532
21	Moulshree Sahu	moulshreesahu243@gmail.com	8103050172	Anxiety	\N	\N	\N	\N	2026-03-13 16:15:54.769
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
6bfb8add-6fd6-4fea-9bf5-88b1ccde463a	af16dc0799ad61dddc2648e7b1fc0214d8812bf299e52390d89cd0f814eb820e	2026-03-05 19:35:36.58243+05:30	20260305140536_init	\N	\N	2026-03-05 19:35:36.542761+05:30	1
\.


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookings (id, name, email, phone, mode, goal, practices, notes, created_at) FROM stdin;
\.


--
-- Name: Booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Booking_id_seq"', 21, true);


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.bookings_id_seq', 1, false);


--
-- Name: Booking Booking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Booking"
    ADD CONSTRAINT "Booking_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict gaeL7ASCTzUJBkbQILdGJM9h5VNN4hEThfzvB9xqw1zJSQ8AofnhXOoNx1U74FX

