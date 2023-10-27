<script setup lang="ts">
import axios from 'axios'

import { salesStore } from '../store/salesStore';

const titleMessage = "Sales records for Denver location";


const fetchDataHandler = async() => {
    const data = await axios.get('http://localhost:4000/sales/records')
    salesStore.setSalesRecords(data.data.records);
    salesStore.isLoaded = true;
}

const formatedDate = (salesDate: string) => {
    const date = new Date(salesDate);

    const day = date.getDate().toString().padStart(2, '0'); 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}

</script>


<template>
    <div>
        <h1>{{titleMessage}}</h1>
    </div>
    <div v-if="!salesStore.isLoaded">
        <button @click="fetchDataHandler">
            <span>Fetch Data</span>
        </button>
    </div>
    <div class="sales">
        <div class="sales_records" v-for="record in salesStore.salesRecords">
            <p>
                <span class="title">Customer Email:</span> {{ record.customer.email }} | <span class="title">Sales Date:</span> {{ formatedDate(record.saleDate) }}
            </p>
            <p>
                <span class="title">Total Items Purchase:</span> {{ record.items.length }} | <span class="title">Purchase Method:</span> {{ record.purchaseMethod }}
            </p>
        </div>
      
    </div>
</template>
  
  <style>
    .sales {
        min-height: 80vh;
        height: 90vh;
        overflow-y: auto;
    }
    .sales_records {
        box-shadow: 8px 8px 11px -6px rgba(0,0,0,0.75);
        -webkit-box-shadow: 8px 8px 11px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 8px 8px 11px -6px rgba(0,0,0,0.75);
        background-color: #e9e9e9;
        margin: 10px 0;
        padding: 10px;
    }
    .title {
        font-weight: 700;
    }

  </style>
  