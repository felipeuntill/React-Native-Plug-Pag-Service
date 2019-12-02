import { NativeModules } from 'react-native';

const { PlugPagService } = NativeModules;

const PlugPag = {
    // PlugPagPayment Type
    TYPE_CREDITO: PlugPagService.TYPE_CREDITO,
    TYPE_DEBITO: PlugPagService.TYPE_DEBITO,
    TYPE_VOUCHER: PlugPagService.TYPE_VOUCHER,

    // PlugPagPayment Installment Type
    INSTALLMENT_TYPE_A_VISTA: PlugPagService.INSTALLMENT_TYPE_A_VISTA,
    INSTALLMENT_TYPE_PARC_VENDEDOR: PlugPagService.INSTALLMENT_TYPE_PARC_VENDEDOR,
    INSTALLMENT_TYPE_PARC_COMPRADOR: PlugPagService.INSTALLMENT_TYPE_PARC_COMPRADOR,

    OPERATION_ABORT: PlugPagService.OPERATION_ABORT,
    OPERATION_ABORTED: PlugPagService.OPERATION_ABORTED,
    OPERATION_ACTIVATE: PlugPagService.OPERATION_ACTIVATE,
    OPERATION_CALCULATE_INSTALLMENTS: PlugPagService.OPERATION_CALCULATE_INSTALLMENTS,
    OPERATION_CHECK_AUTHENTICATION: PlugPagService.OPERATION_CHECK_AUTHENTICATION,
    OPERATION_DEACTIVATE: PlugPagService.OPERATION_DEACTIVATE,
    OPERATION_GET_APPLICATION_CODE: PlugPagService.OPERATION_GET_APPLICATION_CODE,
    OPERATION_GET_LIB_VERSION: PlugPagService.OPERATION_GET_LIB_VERSION,
    OPERATION_GET_READER_INFOS: PlugPagService.OPERATION_GET_READER_INFOS,
    OPERATION_GET_USER_DATA: PlugPagService.OPERATION_GET_USER_DATA,
    OPERATION_HAS_CAPABILITY: PlugPagService.OPERATION_HAS_CAPABILITY,
    OPERATION_INVALIDATE_AUTHENTICATION: PlugPagService.OPERATION_INVALIDATE_AUTHENTICATION,
    OPERATION_NFC_ABORT: PlugPagService.OPERATION_NFC_ABORT,
    OPERATION_NFC_READ: PlugPagService.OPERATION_NFC_READ,
    OPERATION_NFC_WRITE: PlugPagService.OPERATION_NFC_WRITE,
    OPERATION_PAYMENT: PlugPagService.OPERATION_PAYMENT,
    OPERATION_PRINT: PlugPagService.OPERATION_PRINT,
    OPERATION_QUERY_LAST_APPROVED_TRANSACTION: PlugPagService.OPERATION_QUERY_LAST_APPROVED_TRANSACTION,
    OPERATION_REFUND: PlugPagService.OPERATION_REFUND,
    OPERATION_REPRINT_CUSTOMER_RECEIPT: PlugPagService.OPERATION_REPRINT_CUSTOMER_RECEIPT,
    OPERATION_REPRINT_STABLISHMENT_RECEIPT: PlugPagService.OPERATION_REPRINT_STABLISHMENT_RECEIPT,

    ACTION_POST_OPERATION: PlugPagService.ACTION_POST_OPERATION,
    ACTION_PRE_OPERATION: PlugPagService.ACTION_PRE_OPERATION,
    ACTION_UPDATE: PlugPagService.ACTION_UPDATE,

    APN_SERVICE_CLASS_NAME: PlugPagService.APN_SERVICE_CLASS_NAME,
    APN_SERVICE_PACKAGE_NAME: PlugPagService.APN_SERVICE_PACKAGE_NAME,

    AUTHENTICATION_FAILED: PlugPagService.AUTHENTICATION_FAILED,
    COMMUNICATION_ERROR: PlugPagService.COMMUNICATION_ERROR,
    ERROR_CODE_OK: PlugPagService.ERROR_CODE_OK,
    MIN_PRINTER_STEPS: PlugPagService.MIN_PRINTER_STEPS,
    NFC_SERVICE_CLASS_NAME: PlugPagService.NFC_SERVICE_CLASS_NAME,
    NFC_SERVICE_PACKAGE_NAME: PlugPagService.NFC_SERVICE_PACKAGE_NAME,
    NO_PRINTER_DEVICE: PlugPagService.NO_PRINTER_DEVICE,
    NO_TRANSACTION_DATA: PlugPagService.NO_TRANSACTION_DATA,
    SERVICE_CLASS_NAME: PlugPagService.SERVICE_CLASS_NAME,
    SERVICE_PACKAGE_NAME: PlugPagService.SERVICE_PACKAGE_NAME,
    SMART_RECHARGE_SERVICE_CLASS_NAME: PlugPagService.SMART_RECHARGE_SERVICE_CLASS_NAME,
    SMART_RECHARGE_SERVICE_PACKAGE_NAME: PlugPagService.SMART_RECHARGE_SERVICE_PACKAGE_NAME,

    RET_OK: PlugPagService.RET_OK,
}

// class
var PlugPagPaymentData = Object({
    type: PlugPag.TYPE_CREDITO,
    amount: 0,
    installmentType: PlugPag.INSTALLMENT_TYPE_A_VISTA,
    installments: 1,
    userReference: ""
})

var PlugPagActivationData = Object({
    activationCode: ""
})


export default PlugPagService;
