import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material'

const OrdersTable = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState(null);

    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorEl(newAnchorElArray);
    };

    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null;
        setAnchorEl(newAnchorElArray);
    };

    const handleOpenDialog = (order) => {
        setSelectedOrder(order);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedOrder(null);
    };

    const dispatch = useDispatch();
    const { adminOrder } = useSelector(store => store);

    useEffect(() => {
        dispatch(getOrders());
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrder]);

    const handleShippedOrder = (orderId) => {
        dispatch(shipOrder(orderId));
        console.log("handle shipped Order ", orderId);
        handleClose();
    };

    const handleConfirmedOrder = (orderId) => {
        dispatch(confirmOrder(orderId));
        console.log("handle confirmed Order ", orderId);
        handleClose();
    };

    const handleDeliveredOrder = (orderId) => {
        dispatch(deliveredOrder(orderId));
        console.log("handle delivered Order ", orderId);
        handleClose();
    };

    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId));
    };

    return (
        <div className='p-10'>
            <Card className='mt-2 bg-[#1b1b1b]'>
                <CardHeader title="All Orders" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell align="left">Books Name</TableCell>
                                <TableCell align="left">Order Id</TableCell>
                                <TableCell align="left">Total Price</TableCell>
                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell>
                                <TableCell align="left">Information</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{index + 1}</TableCell>
                                    <TableCell align="" className=''>
                                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                                            {item.orderItems.map((orderItem) => <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align='left' scope="row">
                                        {item.orderItems.map((orderItem) => <p>Book: {orderItem.product.title}</p>)}
                                    </TableCell>
                                    <TableCell align="left">{item.id}</TableCell>
                                    <TableCell align="left">{item.totalPrice}</TableCell>
                                    <TableCell align="left">
                                        <span className={`text-white px-5 py-2 rounded-full
                                        ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" :
                                            item.orderStatus === "SHIPPED" ? "bg-[#4141ff]" :
                                                item.orderStatus === "PLACED" ? "bg-[#02B290]" :
                                                    item.orderStatus === "PENDING" ? "bg-[gray]" :
                                                        "bg-[#025720]"}`}>
                                            {item.orderStatus}
                                        </span>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            id="basic-button"
                                            aria-haspopup="true"
                                            onClick={(event) => handleClick(event, index)}
                                            variant='outlined'
                                            aria-controls={`basic-menu-${item.id}`}
                                            aria-expanded={Boolean(anchorEl[index])}
                                        >
                                            Status
                                        </Button>
                                        <Menu
                                            id={`basic-menu-${item.id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={() => handleClose(index)}
                                            MenuListProps={{
                                                'aria-labelledby': 'basic-button',
                                            }}
                                        >
                                            <MenuItem onClick={() => handleConfirmedOrder(item.id)}>Confirm Order</MenuItem>
                                            <MenuItem onClick={() => handleShippedOrder(item.id)}>Ship Order</MenuItem>
                                            <MenuItem onClick={() => handleDeliveredOrder(item.id)}>Deliver Order</MenuItem>
                                        </Menu>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={() => handleDeleteOrder(item.id)} variant='outlined'>
                                            Delete
                                        </Button>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button variant='outlined' onClick={() => handleOpenDialog(item)}>
                                            Information
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Order Information</DialogTitle>
                <DialogContent>
                    {selectedOrder && (
                        <div>
                            <Typography variant="h6">Order ID: {selectedOrder.id}</Typography>
                            <Typography>Customer: {selectedOrder.user.firstName} {selectedOrder.user.lastName}</Typography>
                            <Typography>Address: {selectedOrder?.shippingAddress.streetAddress}</Typography>
                            <Typography>City: {selectedOrder?.shippingAddress.city}</Typography>
                            <Typography>State/Province/Region: {selectedOrder?.shippingAddress.state}</Typography>
                            <Typography>Zip/Postal code: {selectedOrder?.shippingAddress.zipCode}</Typography>
                            <Typography>Phone number: {selectedOrder?.shippingAddress.mobile}</Typography>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default OrdersTable;
