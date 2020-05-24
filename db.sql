--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: book_catalog; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book_catalog (
    title text NOT NULL,
    author text NOT NULL,
    price double precision NOT NULL,
    supplier_id text NOT NULL,
    isbn text NOT NULL
);


ALTER TABLE public.book_catalog OWNER TO postgres;

--
-- Name: members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.members (
    username character varying(30) NOT NULL,
    password character varying(100),
    role character varying(30)
);


ALTER TABLE public.members OWNER TO postgres;

--
-- Name: supplier; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.supplier (
    supplier_id text NOT NULL,
    supplier_rating double precision NOT NULL,
    supplier_location text NOT NULL,
    supplier_name name NOT NULL COLLATE pg_catalog."default"
);


ALTER TABLE public.supplier OWNER TO postgres;

--
-- Data for Name: book_catalog; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.book_catalog (title, author, price, supplier_id, isbn) FROM stdin;
Angels and Demons	Tom Phil	25.75	S01	LST2468
power of habits	roger dan	35	S03	NTP3740
robinhood	john doe	25	S04	LRW1740
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.members (username, password, role) FROM stdin;
larry@gmail.com	hjg	customer
peter@outlook.com	jjsdkj	customer
roger@yahoo.com	rh98	customer
tabby@gmail.com	t001	admin
james@yahoo.com	jm67	admin
tom@gmail.com	qwp	customer
hans@gmail.com	h56	vendor
jack@gmail.com	hjhkj	vendor
\.


--
-- Data for Name: supplier; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.supplier (supplier_id, supplier_rating, supplier_location, supplier_name) FROM stdin;
S01	4.5	Texas	Barnes & Noble
S02	3	California	Hunter Books
S03	2	Virginia	Raymond
S04	3	New York	Terrace
\.


--
-- Name: book_catalog Book Catalog_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_catalog
    ADD CONSTRAINT "Book Catalog_pkey" PRIMARY KEY (isbn);


--
-- Name: supplier Supplier_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.supplier
    ADD CONSTRAINT "Supplier_pkey" PRIMARY KEY (supplier_id);


--
-- Name: members readers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT readers_pkey PRIMARY KEY (username);


--
-- Name: fki_FK; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "fki_FK" ON public.book_catalog USING btree (supplier_id);


--
-- Name: book_catalog Book Catalog_Supplier_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_catalog
    ADD CONSTRAINT "Book Catalog_Supplier_ID_fkey" FOREIGN KEY (supplier_id) REFERENCES public.supplier(supplier_id);


--
-- PostgreSQL database dump complete
--

